"use client"

import { useState } from "react"
import Image from "next/image"

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true)
  }

  return (
    <div className="flex justify-center py-2 px-4">
      <div className="relative rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl">
        <div className="relative aspect-video w-full">
          {!isPlaying ? (
            <>
              <Image
                src="/video-thumbnail.png"
                alt="Blood Availability Problems in Pakistan"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent">
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h2 className="text-white font-semibold text-xl md:text-3xl lg:text-3xl leading-tight max-w-xs md:max-w-md">
                    Blood Availabiltiy Problems
                    <br />
                    <span className="text-gray-200"> In Pakistan</span>
                  </h2>
                  <span className="text-white text-sm lg:text-xl md:text-base font-medium">Know More</span>
                </div>

                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                className="absolute inset-0 flex items-center justify-center group"
                onClick={handlePlayClick}
                aria-label="Play video about blood availability problems in Pakistan"
              >
                <div className="bg-black/90 backdrop-blur-sm rounded-full p-4 md:p-6  transition-all duration-300 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 md:h-12 md:w-12 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <video className="w-full h-full object-cover" controls autoPlay poster="/video-thumbnail.png">
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoSection

