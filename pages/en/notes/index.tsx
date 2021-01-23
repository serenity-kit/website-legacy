import Hero from "../../../components/Hero";
import Clients from "../../../components/Clients";
import Video from "../../../components/Video";
import SubscribeForm from "../../../components/SuscribeForm";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="bg-background overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Seamless editing experience
              </h4>
              {/* <p className="mt-3 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p> */}

              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Body text, Headlines, Lists
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        The editor offers simple, but effective list of
                        formatting options.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Checklists
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        With Checklists you can keep track of Todos inside your
                        notes.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Media (coming soon …)
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Add Images, Videos or Attachments to enrich your notes.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <div className="relative mx-10 shadow-2xl border-4 border-white">
                <Video
                  title="Editing"
                  sources={[
                    {
                      src: "/videos-v1/editing.mp4",
                      type: "video/mp4",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Sign up without an Email, Phone number or Password
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  You can sign up in seconds with one click. No email, phone
                  number or password is needed since the secret keys generated
                  and stored on your device convert your device to your key to
                  authenticate with the servers or collaborators.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <div className="relative mx-10 shadow-2xl border-4 border-white">
                  <Video
                    title="Signup"
                    sources={[
                      {
                        src: "/videos-v1/signup.mp4",
                        type: "video/mp4",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background overflow-hidden pb-16">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <svg
            className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            />
          </svg>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Collaborator securely
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Adding another contact only requires your to connect once by
                sending your contact an invitation code.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                In the video your can see how a new contact is added and an
                existing note shared with this new contact. Further the notes is
                updated and synced to the contact's device.
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                />
              </svg>
              <div className="relative mx-10 shadow-2xl border-4 border-white">
                <Video
                  title="Add a contact and collaborate on a note"
                  sources={[
                    {
                      src: "/videos-v1/add-contact.mp4",
                      type: "video/mp4",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <svg
            className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
            />
          </svg>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Link multiple personal Devices
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  While it's important to collaborate with others, it's also
                  very relevant to have your data available on all your devices.
                  Of course also synchronized securely.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <div className="relative mx-10 shadow-2xl border-4 border-white">
                  <Video
                    title="Link Device"
                    sources={[
                      {
                        src: "/videos-v1/link-device.mp4",
                        type: "video/mp4",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Clients />

      <div className="bg-background flex justify-center py-16 lg:py-20 xl:py-24">
        <div className=" max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-6 lg:px-8">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Sign up for our newsletter{" "}
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-primary sm:block sm:text-4xl">
            to receive news and product updates
          </p>
          <SubscribeForm />
        </div>
      </div>
    </>
  );
}
