"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Property } from "../types/property"

interface RoomExplorerProps {
  property: Property
}

export function RoomExplorer({ property }: RoomExplorerProps) {
  const [currentRoom, setCurrentRoom] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const handleRoomChange = (newIndex: number) => {
    setDirection(newIndex > currentRoom ? "right" : "left")
    setCurrentRoom(newIndex)
  }

  const goToPreviousRoom = () => {
    const newIndex = currentRoom === 0 ? property.rooms.length - 1 : currentRoom - 1
    handleRoomChange(newIndex)
  }

  const goToNextRoom = () => {
    const newIndex = (currentRoom + 1) % property.rooms.length
    handleRoomChange(newIndex)
  }

  return (
    <div className="space-y-6">
      {/* Room Image with Navigation */}
      <div className="bg-white rounded-xl overflow-hidden border border-border">
        <div className="relative h-64 sm:h-80 md:h-96 bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={property.rooms[currentRoom].image || "/placeholder.svg"}
            alt={property.rooms[currentRoom].name}
            className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${
              direction === "right" ? "translate-x-0" : "translate-x-0"
            }`}
          />

          {/* Navigation Buttons */}
          <button
            onClick={goToPreviousRoom}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10 shadow-lg"
            aria-label="Previous room"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNextRoom}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full transition-colors z-10 shadow-lg"
            aria-label="Next room"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Room Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentRoom + 1} / {property.rooms.length}
          </div>
        </div>

        {/* Room Info */}
        <div className="p-4 sm:p-6 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              {property.rooms[currentRoom].name}
            </h2>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Room {currentRoom + 1} of {property.rooms.length}
            </span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {property.rooms[currentRoom].description}
          </p>
        </div>
      </div>

      {/* Room Grid */}
      <div>
        <h3 className="text-lg font-bold text-foreground mb-4">Explore All Rooms</h3>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {property.rooms.map((room, index) => (
            <button
              key={index}
              onClick={() => handleRoomChange(index)}
              className={`group relative h-32 rounded-lg overflow-hidden transition-all duration-300 ${
                currentRoom === index 
                  ? "ring-3 ring-primary shadow-lg scale-105" 
                  : "hover:shadow-md hover:scale-102"
              }`}
            >
              <img
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all ${
                  currentRoom === index 
                    ? "bg-primary/20" 
                    : "bg-black/0 group-hover:bg-black/20"
                }`}
              >
                <span className="text-white font-medium text-sm text-center px-2 bg-black/50 rounded py-1 backdrop-blur-sm">
                  {room.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Room Selector */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 pt-2 -mx-2 px-2">
          {property.rooms.map((room, index) => (
            <button
              key={index}
              onClick={() => handleRoomChange(index)}
              className={`flex-shrink-0 px-4 py-3 rounded-lg whitespace-nowrap text-sm font-medium transition-all border ${
                currentRoom === index
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-muted text-foreground hover:bg-muted/80 border-border"
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}