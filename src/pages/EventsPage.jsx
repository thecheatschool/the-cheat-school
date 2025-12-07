import React from 'react'
import { urlFor } from '../services/api'
import { useGetAllEvents } from '../services/useEventsQueries'
import { ExternalLink, Calendar, Clock, Monitor, Users } from 'lucide-react'
import Loader from '../components/global/Loader'
import ErrorDisplay from '../components/global/ErrorDisplay'

const EventsPage = () => {
  const { data: events = [], isLoading, isError, error } = useGetAllEvents()

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ErrorDisplay 
          heading="Failed to load events" 
          message={error?.message || 'Unable to fetch events. Please try again later.'}
        />
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
              className="p-2 mb-4 flex items-center justify-center bg-transparent"
            >
              <div className="max-w-3xl group border border-black/20 dark:border-white/30 rounded-3xl dark:bg-black duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.45)] hover:dark:shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5 w-full">

                <div className="relative overflow-hidden rounded-t-3xl">
                  {event.eventImage ? (
                    <img
                      className="h-[260px] object-cover rounded-t-3xl w-full group-hover:shadow-lg group-hover:scale-102 transition-transform duration-300"
                      src={urlFor(event.eventImage)}
                      alt={event.title}
                    />
                  ) : (
                    <div className="h-[260px] bg-muted rounded-t-3xl w-full" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Header */}
                <div className="text-black dark:text-white text-center p-1 mt-2 text-3xl font-primary">
                  {event.title}
                </div>
                <div className="mt-3 mx-auto h-px bg-primary dark:bg-white/10 w-[200px]" />

                {/* Content */}
                <div className="mt-4 p-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-sm">
                  {/* Left column */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-primary font-primary font-medium flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Guest Speakers
                      </p>
                      <div>
                        <ul>
                          {(event.guestSpeakers && event.guestSpeakers.length > 0 ? event.guestSpeakers : []).map((sp, idx) => (
                            <li className="font-secondary font-semibold text-sm" key={idx}>
                              {sp.name || sp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <p className="text-primary font-primary font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date
                      </p>
                      <p className="mt-1 dark:text-white text-base font-semibold">
                        {event.date ? new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : 'TBA'}
                      </p>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-primary font-teritiary font-medium flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        Event Mode
                      </p>
                      <p className="mt-1 dark:text-white text-base font-semibold">{event.mode ? (event.mode === 'online' ? 'Online' : 'Offline') : 'TBA'}</p>
                    </div>

                    <div>
                      <p className="text-primary font-teritiary font-medium flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Time
                      </p>
                      <p className="mt-1 dark:text-white text-base font-semibold">{event.time || 'TBA'}</p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-4 mb-4 flex justify-center">
                  <button onClick={() => handleJoinEvent(event)} className="px-8 py-2 font-primary rounded-md bg-primary hover:bg-red-500 duration-200 transition-transform text-white text-lg font-medium tracking-wide shadow-[0_8px_20px_rgba(0,0,0,0.25)] ">
                    View Event <span className="ml-2">→</span>
                  </button>
                </div>

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
