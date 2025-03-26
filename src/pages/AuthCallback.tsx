
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { toast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  useEffect(() => {
    // Handle the OAuth callback
    const handleCallback = async () => {
      try {
        // Check if auth was successful
        if (user) {
          toast({
            title: "Authentication successful",
            description: "You have successfully signed in"
          });
          
          // Redirect based on user type or if profile needs to be created
          if (profile?.user_type === 'client') {
            navigate('/client');
          } else if (profile?.bio) {
            // Student with complete profile
            navigate('/student');
          } else {
            // Student without profile - send to profile creation
            navigate('/students/create-profile');
          }
        } else {
          // Wait a bit for auth state to update
          setTimeout(() => {
            if (!user) {
              toast({
                variant: "destructive",
                title: "Authentication failed",
                description: "Please try again"
              });
              navigate('/login');
            }
          }, 2000);
        }
      } catch (error) {
        console.error('Error in auth callback:', error);
        toast({
          variant: "destructive",
          title: "Authentication error",
          description: "An unexpected error occurred"
        });
        navigate('/login');
      }
    };

    handleCallback();
  }, [user, profile, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h1 className="mt-6 text-2xl font-semibold">Completing authentication...</h1>
      <p className="mt-2 text-muted-foreground">Please wait while we set up your account</p>
    </div>
  );
};

export default AuthCallback;
