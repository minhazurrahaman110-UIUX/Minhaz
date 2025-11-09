import React, { useState, useMemo } from 'react';
import type { Dentist, Booking } from '../types';
import GlassCard from './GlassCard';
import { CalendarIcon, ClockIcon, UserIcon, BellIcon, DeviceMobileIcon } from './icons/FormIcons';
import { MailIcon } from './icons/ContactIcons';
import { CheckCircleIcon } from './icons/AppIcons';

const dentists: Dentist[] = [
  { id: '1', name: 'Dr. Evelyn Reed', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Dr. Marcus Chen', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Dr. Sofia Garcia', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop' },
];

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'];

// Helper to get today's date in YYYY-MM-DD format
const getTodayString = () => new Date().toISOString().split('T')[0];

const BookingForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'appointments'>('booking');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDentist, setSelectedDentist] = useState<string>(dentists[0].id);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState<Booking | null>(null);
  const [bookingStatus, setBookingStatus] = useState<{ message: string } | null>(null);

  // Reminder State
  const [optInReminders, setOptInReminders] = useState(false);
  const [reminderMethod, setReminderMethod] = useState<'email' | 'sms'>('email');
  const [reminderContact, setReminderContact] = useState('');
  const [reminderTiming, setReminderTiming] = useState<'24h' | '2h' | '1h'>('24h');

  // Mock database of existing bookings
  const [bookings, setBookings] = useState<Booking[]>([
    { dentistId: '2', date: getTodayString(), time: '10:00 AM' },
    { dentistId: '1', date: getTodayString(), time: '01:00 PM', reminderPreferences: { method: 'email', contact: 'test@example.com', timing: '24h' } },
    { dentistId: '3', date: getTodayString(), time: '02:00 PM' },
  ]);

  const currentlySelectedDentist = useMemo(() => dentists.find(d => d.id === selectedDentist), [selectedDentist]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const isSlotBooked = (time: string) => {
    return bookings.some(
      booking =>
        booking.dentistId === selectedDentist &&
        booking.date === formatDate(selectedDate) &&
        booking.time === time
    );
  };

  const handleCancelBooking = (bookingToCancel: Booking) => {
    setBookings(currentBookings => 
      currentBookings.filter(booking => 
        !(booking.dentistId === bookingToCancel.dentistId && 
          booking.date === bookingToCancel.date && 
          booking.time === bookingToCancel.time)
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTime) {
      setBookingStatus({ message: 'Please select a time slot.' });
      return;
    }

    if (isSlotBooked(selectedTime)) {
      setBookingStatus({ message: 'This time slot is already booked. Please select another time.' });
      return;
    }
    
    if (optInReminders && !reminderContact.trim()) {
      setBookingStatus({ message: 'Please enter your email or phone number for reminders.' });
      return;
    }

    // Add to our mock DB
    const newBooking: Booking = {
      dentistId: selectedDentist,
      date: formatDate(selectedDate),
      time: selectedTime,
      reminderPreferences: optInReminders && reminderContact.trim() ? {
        method: reminderMethod,
        contact: reminderContact,
        timing: reminderTiming,
      } : undefined,
    };
    setBookings(prev => [...prev, newBooking].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime() || a.time.localeCompare(b.time)));
    setLastConfirmedBooking(newBooking);
    setShowConfirmation(true);
    setBookingStatus(null);
    setSelectedTime(null); // Reset time after successful booking
    
    // Reset reminder form
    setOptInReminders(false);
    setReminderMethod('email');
    setReminderContact('');
    setReminderTiming('24h');
  };

  const ConfirmationModal = () => {
    if (!lastConfirmedBooking) return null;
    const dentistName = dentists.find(d => d.id === lastConfirmedBooking.dentistId)?.name;
    const bookingDate = new Date(lastConfirmedBooking.date + 'T00:00:00').toDateString();

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <GlassCard className="p-8 text-center max-w-md w-full !bg-white/80 dark:!bg-gray-800/80">
          <CheckCircleIcon className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Appointment Confirmed!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your appointment with {dentistName} on {bookingDate} at {lastConfirmedBooking.time} has been successfully booked.
          </p>
          {lastConfirmedBooking.reminderPreferences && (
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6 bg-emerald-50 dark:bg-emerald-900/50 p-3 rounded-lg">
              A reminder will be sent via {lastConfirmedBooking.reminderPreferences.method} to <strong>{lastConfirmedBooking.reminderPreferences.contact}</strong> {
                  { '24h': '24 hours', '2h': '2 hours', '1h': '1 hour' }[lastConfirmedBooking.reminderPreferences.timing]
              } before.
            </div>
          )}
          <button
            onClick={() => setShowConfirmation(false)}
            className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors"
          >
            Close
          </button>
        </GlassCard>
      </div>
    );
  };

  return (
    <>
      <GlassCard className="p-6 md:p-8" id="booking">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Book Your Perfect Smile</h3>

        <div className="flex border-b border-white/20 dark:border-gray-700/30 mb-6">
          <button
            onClick={() => setActiveTab('booking')}
            className={`flex-1 py-2 text-sm font-semibold transition-colors duration-300 ${
              activeTab === 'booking'
                ? 'text-emerald-500 dark:text-emerald-400 border-b-2 border-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
            }`}
          >
            New Appointment
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex-1 py-2 text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'appointments'
                ? 'text-emerald-500 dark:text-emerald-400 border-b-2 border-emerald-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
            }`}
          >
            My Appointments
            {bookings.length > 0 && (
              <span className="bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {bookings.length}
              </span>
            )}
          </button>
        </div>

        {activeTab === 'booking' && (
          <div className="animate-fadeInUp" style={{animationDuration: '0.5s'}}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <UserIcon className="w-5 h-5" />
                  Choose Your Dentist
                </label>
                <div className="relative">
                  {currentlySelectedDentist && (
                     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img src={currentlySelectedDentist.avatar} alt={currentlySelectedDentist.name} className="w-6 h-6 rounded-full" />
                    </div>
                  )}
                  <select
                    value={selectedDentist}
                    onChange={(e) => {
                      setSelectedDentist(e.target.value);
                      setSelectedTime(null);
                      setBookingStatus(null);
                    }}
                    className="w-full p-3 pl-11 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition appearance-none"
                  >
                    {dentists.map(dentist => (
                      <option key={dentist.id} value={dentist.id} className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                        {dentist.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <CalendarIcon className="w-5 h-5" />
                    Select Date
                </label>
                <input 
                    type="date"
                    value={formatDate(selectedDate)}
                    min={getTodayString()}
                    onChange={(e) => {
                        const newDate = new Date(e.target.value + 'T00:00:00');
                        setSelectedDate(newDate);
                        setSelectedTime(null);
                        setBookingStatus(null);
                    }}
                    className="w-full p-3 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition appearance-none"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <ClockIcon className="w-5 h-5" />
                  Select Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(time => {
                    const booked = isSlotBooked(time);
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={booked}
                        onClick={() => {
                          setSelectedTime(time);
                          setBookingStatus(null);
                        }}
                        className={`
                          p-2 text-sm rounded-lg transition
                          ${selectedTime === time 
                            ? 'bg-emerald-500 text-white shadow-md' 
                            : 'bg-white/40 dark:bg-gray-700/40'}
                          ${booked 
                            ? 'cursor-not-allowed bg-gray-300/50 dark:bg-gray-800/50 text-gray-500 line-through'
                            : 'hover:bg-white/80 dark:hover:bg-gray-700/80'
                          }
                        `}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4 pt-4 mt-4 border-t border-white/20 dark:border-gray-700/30">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optInReminders}
                    onChange={(e) => setOptInReminders(e.target.checked)}
                    className="w-5 h-5 rounded text-emerald-500 bg-white/50 dark:bg-gray-700/50 border-white/30 dark:border-gray-600 focus:ring-emerald-500 focus:ring-offset-0"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Opt-in for appointment reminders</span>
                </label>

                {optInReminders && (
                  <div className="space-y-4 pl-8 animate-fadeInUp" style={{animationDuration: '0.5s'}}>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Reminder Method</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                          <input type="radio" name="reminderMethod" value="email" checked={reminderMethod === 'email'} onChange={() => { setReminderMethod('email'); setReminderContact(''); }} className="text-emerald-500 focus:ring-emerald-500"/>
                          Email
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                          <input type="radio" name="reminderMethod" value="sms" checked={reminderMethod === 'sms'} onChange={() => { setReminderMethod('sms'); setReminderContact(''); }} className="text-emerald-500 focus:ring-emerald-500"/>
                          SMS
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {reminderMethod === 'email' ? <MailIcon className="w-5 h-5"/> : <DeviceMobileIcon className="w-5 h-5" />}
                        {reminderMethod === 'email' ? 'Email Address' : 'Phone Number'}
                      </label>
                      <input
                        type={reminderMethod === 'email' ? 'email' : 'tel'}
                        value={reminderContact}
                        onChange={(e) => setReminderContact(e.target.value)}
                        placeholder={reminderMethod === 'email' ? 'you@example.com' : '+1 (555) 123-4567'}
                        className="w-full p-3 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        required={optInReminders}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <BellIcon className="w-5 h-5" />
                        Remind Me Before
                      </label>
                      <select
                        value={reminderTiming}
                        onChange={(e) => setReminderTiming(e.target.value as '24h' | '2h' | '1h')}
                        className="w-full p-3 bg-white/50 dark:bg-gray-700/50 border border-white/30 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                      >
                        <option value="24h" className="bg-white dark:bg-gray-800">24 hours before</option>
                        <option value="2h" className="bg-white dark:bg-gray-800">2 hours before</option>
                        <option value="1h" className="bg-white dark:bg-gray-800">1 hour before</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

               {bookingStatus && (
                <div className="p-3 rounded-lg bg-amber-100/50 dark:bg-amber-900/50 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-sm">
                  <p>{bookingStatus.message}</p>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        )}

        {activeTab === 'appointments' && (
           <div className="animate-fadeInUp" style={{animationDuration: '0.5s'}}>
            {bookings.length > 0 ? (
              <div>
                <h4 className="text-lg font-bold text-center mb-4 text-gray-800 dark:text-white">Your Appointments</h4>
                <ul className="space-y-3 max-h-96 overflow-y-auto pr-2">
                  {bookings.map((booking, index) => (
                    <li key={index} className="flex justify-between items-center bg-white/20 dark:bg-gray-900/20 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <img src={dentists.find(d => d.id === booking.dentistId)?.avatar} alt="" className="w-8 h-8 rounded-full"/>
                        <div>
                          <p className="font-semibold text-sm">{dentists.find(d => d.id === booking.dentistId)?.name}</p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{new Date(booking.date + 'T00:00:00').toDateString()} - {booking.time}</p>
                        </div>
                        {booking.reminderPreferences && <BellIcon className="w-4 h-4 text-emerald-500" title="Reminder is set" />}
                      </div>
                      <button 
                        onClick={() => handleCancelBooking(booking)}
                        className="text-xs bg-red-100/50 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-3 py-1 rounded-full hover:bg-red-200/70 dark:hover:bg-red-800/70 transition-colors"
                      >
                        Cancel
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                <p>You have no upcoming appointments.</p>
                <button 
                  onClick={() => setActiveTab('booking')}
                  className="mt-4 text-emerald-500 font-semibold hover:underline"
                >
                  Book one now!
                </button>
              </div>
            )}
          </div>
        )}
      </GlassCard>
      {showConfirmation && <ConfirmationModal />}
    </>
  );
};

export default BookingForm;