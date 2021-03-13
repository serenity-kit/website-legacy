import Hero from "../../../components/Hero";
import Clients from "../../../components/Clients";
import Video from "../../../components/Video";
import ProductComparison from "../../../components/ProductComparison";
import SubscribeForm from "../../../components/SuscribeForm";

export default function NotesHome() {
  return (
    <>
      <Hero />

      <div className="bg-background overflow-hidden">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative my-12 lg:my-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-2xl leading-8 font-semibold text-gray-900 sm:text-3xl sm:leading-9">
                Seamless editing experience
              </h2>
              {/* <p className="mt-3 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p> */}

              <ul className="mt-10">
                <li>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Body text, Headlines, Lists
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    The app offers simple but effective text formatting options.
                  </p>
                </li>
                <li className="mt-10">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Checklists
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    With Checklists you can keep track of to-dos within your
                    notes.
                  </p>
                </li>
                <li className="mt-10">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Media (coming soon)
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Add Images, Videos, and Attachments to enrich your notes.
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative mx-10 shadow-2xl border-4 border-white rounded">
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
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center">
            <h2 className="mt-2 leading-8 font-semibold text-gray-900 text-2xl sm:text-3xl">
              Security & Privacy
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
              By leveraging state of the art end-to-end encryption you get the
              control to decide who can access your data.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How is your data secured?
                  </dt>
                  <dd className="mt-2 text-lg text-gray-500">
                    All notes are encrypted and a note can only be decrypted by
                    the devices of its collaborators. In addition contact and
                    device names are encrypted and can only be accessed by your
                    devices. This means Serenity's servers can't decrypt any of
                    your content. The servers only act as a transport service of
                    encrypted data between devices.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What technology is used?
                  </dt>
                  <dd className="mt-2 text-lg  text-gray-500">
                    The encryption is based on the{" "}
                    <a href="https://signal.org/docs/specifications/doubleratchet/">
                      Double Ratchet Algorithm
                    </a>{" "}
                    popularised by <a href="https://signal.org/">Signal</a>. It
                    uses the{" "}
                    <a href="https://gitlab.matrix.org/matrix-org/olm">
                      Olm and Megaolm
                    </a>{" "}
                    implementation which is powering the end-to-end encryption
                    of the <a href="https://matrix.org/">Matrix Protocol</a>.
                    Serenity's protocol is inspired by the Matrix protocol but
                    optimized for shared data. The source code of Serenity Notes
                    iOS and Android client has been open sourced and is
                    available{" "}
                    <a href="https://github.com/SerenityNotes/serenity-notes-clients">
                      here
                    </a>
                    . More details on the protocol will follow in the future …
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <ProductComparison />

      <div className="bg-background overflow-hidden pb-16">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h2 className="leading-8 font-semibold text-gray-900 text-2xl sm:text-3xl sm:leading-9">
                  Sign up without an email, phone number or password
                </h2>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Sign up in seconds with just one click without the necessity
                  of providing an email, phone number or password. The secret
                  keys generated and stored on your device convert your device
                  into the authentication mechanism with servers and
                  collaborators.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <div className="relative mx-10 shadow-2xl border-4 border-white rounded">
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

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h2 className="text-2xl leading-8 font-semibold text-gray-900 sm:text-3xl sm:leading-9">
                Collaborate securely
              </h2>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Adding another contact only requires you to connect once by
                sending your contact an invitation code.
              </p>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                The video shows how a new contact is added and how an existing
                note is shared with the new contact. Furthermore the note is
                updated and synced to the contact's device.
              </p>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative mx-10 shadow-2xl border-4 border-white rounded">
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

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h2 className="text-2xl leading-8 font-semibold text-gray-900 sm:text-3xl sm:leading-9">
                  Link multiple personal Devices
                </h2>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  While it's important to collaborate with others, it's also
                  very relevant to have your data available and securely
                  synchronized across all your devices.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <div className="relative mx-10 shadow-2xl border-4 border-white rounded">
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
          <h2 className="inline text-2xl font-semibold text-gray-900 sm:block sm:text-3xl">
            Sign up for our newsletter{" "}
          </h2>
          <p className="inline text-2xl font-semibold text-primary sm:block sm:text-3xl">
            to receive news and product updates
          </p>
          <SubscribeForm convertkitFormId="1781726" />
        </div>
      </div>
    </>
  );
}
