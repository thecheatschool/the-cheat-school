import React, { useEffect, useState } from 'react'
import { getAllEvents, urlFor } from '../services/sanityClient'
import { Calendar, Clock, MapPin, Monitor, Users, ArrowRight, Loader2, ExternalLink } from 'lucide-react'

const EventsPage = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching events:', err)
        setError('Failed to load events')
        setLoading(false)
      })
  }, [])

  const handleJoinEvent = (event) => {
    if (event.registrationLink) {
      // If registration link exists, open it
      window.open(event.registrationLink, '_blank')
    } else if (event.location && event.mode === 'offline') {
      // If offline event with location, open Google Maps
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`
      window.open(mapsUrl, '_blank')
    } else if (event.location && event.mode === 'online') {
      // If online event with meeting link, open it
      window.open(event.location, '_blank')
    } else {
      // Fallback: show alert
      alert('Registration details not available yet!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground font-secondary">Loading events...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-destructive font-secondary text-lg">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl mt-19 font-primary font-bold text-foreground mb-4">
            Our Events
          </h1>
          <div className="w-24 h-1 bg-primary"></div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <article 
              key={event.id || event._id} 
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              {event.eventImage && (
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={urlFor(event.eventImage)} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Mode Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      event.mode === 'online' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {event.mode === 'online' ? <Monitor className="w-3 h-3" /> : <MapPin className="w-3 h-3" />}
                      {event.mode === 'online' ? 'ONLINE' : 'OFFLINE'}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-primary font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-col gap-2 text-sm text-muted-foreground font-secondary mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {event.description && (
                  <p className="text-muted-foreground font-secondary mb-4 line-clamp-3">
                    {event.description}
                  </p>
                )}

                {/* Guest Speakers */}
                {event.guestSpeakers && event.guestSpeakers.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-secondary mb-2">
                      <Users className="w-4 h-4" />
                      <span className="font-semibold">Guest Speakers:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {event.guestSpeakers.slice(0, 3).map((speaker, index) => (
                        <div key={index} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full">
                          {speaker.photo && (
                            <img 
                              src={urlFor(speaker.photo)} 
                              alt={speaker.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                          )}
                          <span className="text-xs font-medium text-card-foreground">
                            {speaker.name}
                          </span>
                        </div>
                      ))}
                      {event.guestSpeakers.length > 3 && (
                        <span className="text-xs text-muted-foreground self-center">
                          +{event.guestSpeakers.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Join Now Button */}
                <button 
                  onClick={() => handleJoinEvent(event)}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-teritiary font-semibold px-6 py-3 rounded-md transition-all duration-300 group/btn w-full justify-center"
                >
                  <span>JOIN NOW</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-secondary text-lg">
              No events found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventsPage