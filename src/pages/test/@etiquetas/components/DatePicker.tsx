"use client"

import { useState, useRef, useEffect } from "react"
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { ChevronDown } from "@/pages/test/@etiquetas/components/icons/ChevronDown"

interface DatePickerProps {
  selectedDate: Date | undefined
  onDateChange: (date: Date) => void
}

export default function DatePicker({ selectedDate, onDateChange }: DatePickerProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const calendarRef = useRef<HTMLDivElement>(null)

  // Handle clicks outside the calendar to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Calendar navigation
  const previousMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth)
      newMonth.setMonth(newMonth.getMonth() - 1)
      return newMonth
    })
  }

  const nextMonth = () => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth)
      newMonth.setMonth(newMonth.getMonth() + 1)
      return newMonth
    })
  }

  // Calendar days generation
  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const days = eachDayOfInterval({ start: startDate, end: endDate })

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Fecha de Expiración</label>
      <div className="relative">
        <button
          type="button"
          className="w-full flex justify-between items-center px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onClick={() => setIsCalendarOpen(!isCalendarOpen)}
        >
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
            {selectedDate ? format(selectedDate, "PPP", { locale: es }) : <span>Seleccionar fecha</span>}
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </button>

        {isCalendarOpen && (
          <div
            ref={calendarRef}
            className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <button type="button" className="p-1 hover:bg-gray-100 rounded-full" onClick={previousMonth}>
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h2 className="text-sm font-semibold text-gray-900">
                {format(currentMonth, "MMMM yyyy", { locale: es })}
              </h2>
              <button type="button" className="p-1 hover:bg-gray-100 rounded-full" onClick={nextMonth}>
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
              {["D", "L", "M", "X", "J", "V", "S"].map((day, i) => (
                <div key={i} className="py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 mt-1">
              {days.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  className={`
                    relative p-1 text-center text-sm
                    ${!isSameMonth(day, monthStart) ? "text-gray-400" : "text-gray-900"}
                    ${isSameDay(day, selectedDate || new Date()) ? "bg-indigo-600 text-white rounded-full" : ""}
                    ${isSameMonth(day, monthStart) && !isSameDay(day, selectedDate || new Date()) ? "hover:bg-gray-100 rounded-full cursor-pointer" : ""}
                  `}
                  onClick={() => {
                    if (isSameMonth(day, monthStart)) {
                      onDateChange(day)
                      setIsCalendarOpen(false)
                    }
                  }}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

