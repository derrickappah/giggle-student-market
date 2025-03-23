
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

// We're naming the component DashboardCalendar to avoid conflict with the Calendar UI component
const DashboardCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Client Meeting: TechCorp",
      date: new Date(2023, 3, 15, 10, 0),
      duration: "1 hour",
      location: "Video Call",
      attendees: 3,
      type: "meeting"
    },
    {
      id: 2,
      title: "Project Deadline: Logo Design",
      date: new Date(2023, 3, 18, 17, 0),
      duration: "N/A",
      location: "N/A",
      attendees: 0,
      type: "deadline"
    },
    {
      id: 3,
      title: "Website Redesign Review",
      date: new Date(2023, 3, 20, 14, 30),
      duration: "45 minutes",
      location: "Video Call",
      attendees: 5,
      type: "meeting"
    }
  ];
  
  // Get events for selected date
  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return [];
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  const selectedDateEvents = getEventsForDate(date);
  
  // Get days with events for highlighting in the calendar
  const daysWithEvents = events.map(event => 
    new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate())
  );
  
  return (
    <DashboardLayout 
      title="Calendar" 
      description="Manage your schedule and project deadlines"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          className="lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardContent className="pt-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                modifiers={{
                  booked: daysWithEvents.map(date => new Date(date)),
                }}
                modifiersStyles={{
                  booked: {
                    fontWeight: "bold",
                    border: "2px solid currentColor",
                    borderColor: "var(--primary)",
                  }
                }}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Your project deadlines for the next 14 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events
                  .filter(event => event.type === "deadline")
                  .map((event) => (
                    <div key={event.id} className="flex justify-between items-center border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {event.date.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      <Badge>{event.date.toLocaleDateString('en-US', { 
                        weekday: 'short'
                      })}</Badge>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>
                {date ? date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                }) : 'No date selected'}
              </CardTitle>
              <CardDescription>
                {selectedDateEvents.length} {selectedDateEvents.length === 1 ? 'event' : 'events'} scheduled
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-lg font-medium mb-2">No Events Scheduled</h3>
                  <p className="text-muted-foreground mb-6">
                    You don't have any events scheduled for this day.
                  </p>
                  <Button>Add New Event</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {selectedDateEvents.map((event) => (
                    <div key={event.id} className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 mt-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>
                                {event.date.toLocaleTimeString('en-US', { 
                                  hour: 'numeric', 
                                  minute: '2-digit'
                                })} - {event.duration}
                              </span>
                            </div>
                            {event.location !== "N/A" && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            )}
                            {event.attendees > 0 && (
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                <span>{event.attendees} attendees</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <Badge variant={event.type === "meeting" ? "default" : "secondary"}>
                          {event.type === "meeting" ? "Meeting" : "Deadline"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardCalendar;
