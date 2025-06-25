import React from "react";

const FAQ = () => {
  return (
    <div className="bg-[linear-gradient(to_top_right,_rgba(255,255,255,1)_0%,_rgba(222,222,222,1)_50%)] pt-8 pb-24">
      <div className="max-w-2xl mx-auto ">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center my-16">
            Frequently asked questions
          </h1>
          <details
            className="group [&amp;_summary::-webkit-details-marker]:hidden"
            open=""
          >
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                How do I create or join a live room?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Simply enter a Room ID on the homepage. If the room already exists, you’ll be taken there instantly. If it doesn’t, we’ll create a brand-new live room for you — no account or setup required.
            </p>
          </details>

          <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                Do I need to sign up to start streaming?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
             No signup is required to create or join a live room. Just enter a Room ID and you're in.
            </p>
          </details>

          <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
              <h2 className="text-lg font-medium">
                 Can I invite others to my live room?
              </h2>

              <svg
                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>

            <p className="px-4 pt-4 text-gray-900">
              Yes! Once you're in a room, simply copy and share the Room ID or the room link with your friends, followers, or audience. They can join instantly — no download or login needed.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
