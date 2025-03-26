
import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  profile: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{
    error: any | null;
    data: any | null;
  }>;
  signUp: (email: string, password: string, formData: any) => Promise<{
    error: any | null;
    data: any | null;
  }>;
  signOut: () => Promise<void>;
  isStudent: () => boolean;
  isClient: () => boolean;
  updateProfile: (profileData: any) => Promise<{
    error: any | null;
    data: any | null;
  }>;
  signInWithGoogle: () => Promise<void>;
  signInWithGitHub: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await fetchProfile(session.user.id);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      console.log('Fetching profile for user:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }
      
      console.log('Profile data fetched:', data);
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      return { data, error };
    } catch (error) {
      console.error('Error signing in:', error);
      return { data: null, error };
    }
  };

  const signUp = async (email: string, password: string, formData: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: formData.name,
            last_name: '',
            university: formData.university,
            user_type: formData.userType,
          },
        },
      });
      
      return { data, error };
    } catch (error) {
      console.error('Error signing up:', error);
      return { data: null, error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const updateProfile = async (profileData: any) => {
    if (!user) {
      console.error('No user found for profile update');
      return { 
        error: { message: "User not authenticated" },
        data: null
      };
    }
    
    console.log('Updating profile with data:', profileData);
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(profileData)
        .eq('id', user.id)
        .select();
      
      if (error) {
        console.error('Error updating profile:', error);
        return { data: null, error };
      }
      
      console.log('Profile updated successfully:', data);
      
      // Update the local profile state with the new data
      if (data && data.length > 0) {
        setProfile({...profile, ...profileData});
      }
      
      return { data, error: null };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { data: null, error };
    }
  };

  const isStudent = () => {
    return profile?.user_type === 'student';
  };

  const isClient = () => {
    return profile?.user_type === 'client';
  };

  // New methods for social logins
  const signInWithGoogle = async () => {
    try {
      console.log('Signing in with Google...');
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth-callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      
      if (error) {
        console.error('Error signing in with Google:', error);
        throw error;
      }
      
      // Auth state change listener will handle the session update
    } catch (error) {
      console.error('Error in Google sign in:', error);
    }
  };

  const signInWithGitHub = async () => {
    try {
      console.log('Signing in with GitHub...');
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${window.location.origin}/auth-callback`,
        },
      });
      
      if (error) {
        console.error('Error signing in with GitHub:', error);
        throw error;
      }
      
      // Auth state change listener will handle the session update
    } catch (error) {
      console.error('Error in GitHub sign in:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        isLoading,
        signIn,
        signUp,
        signOut,
        isStudent,
        isClient,
        updateProfile,
        signInWithGoogle,
        signInWithGitHub
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
