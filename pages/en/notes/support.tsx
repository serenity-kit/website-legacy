type FaqProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

function FaqSection(props: FaqProps) {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:gap-8 pt-8 sm:pt-16">
      <div>{props.title}</div>
      <div className="mt-12 lg:mt-0 lg:col-span-2">{props.children}</div>
    </div>
  );
}

function FaqEntry(props: FaqProps) {
  return (
    <div>
      <dt className="text-xl leading-6 font-semi-bold text-gray-900">
        {props.title}
      </dt>
      <dd className="mt-2 text-lg text-gray-500">{props.children}</dd>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="prose prose-lg">
          <h1>Support</h1>
        </div>
        <FaqSection
          title={
            <div className="prose prose-lg text-gray-500">
              <h2>Contact</h2>
            </div>
          }
        >
          <p className="text-lg">
            Please reach out to us at{" "}
            <a href="mailto:hi@serenity.re">hi@serenity.re</a>
          </p>
        </FaqSection>

        <FaqSection
          title={
            <div className="prose prose-lg text-gray-500">
              <h2>FAQ</h2>
            </div>
          }
        >
          <ul className="space-y-4">
            <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Categories
            </span>
            <li>
              <a href="#faq-privacy">Privacy</a>
            </li>
            <li>
              <a href="#faq-account">Account</a>
            </li>
            <li>
              <a href="#faq-applications">Applications</a>
            </li>
            <li>
              <a href="#faq-infrastructure">Infrastructure</a>
            </li>
            <li>
              <a href="#faq-open-source">Open Source</a>
            </li>
            <li>
              <a href="#faq-technical-information">Technical information</a>
            </li>
          </ul>
        </FaqSection>
        <FaqSection
          title={
            <h3
              id="faq-privacy"
              className="text-2xl font-extrabold text-gray-900"
            >
              Privacy
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="What data is end-to-end encrypted?">
              <p>The content of all notes, contact names and device names.</p>
            </FaqEntry>
            <FaqEntry title="What data is not end-to-end encrypted?">
              <p>
                While all content is end-to-end encrypted there is so called
                meta data generated for the whole system to work.
              </p>
              <p className="mt-2">
                For example when you share a note with someone the server won't
                know the content, but is aware that you two collaborate together
                on one note.
              </p>
              <p>Here are few examples of meta data:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Amount of notes</li>
                <li>Amount of updates per note</li>
                <li>Who your contacts are (based on IDs)</li>
              </ul>
              <p className="mt-2">
                We try to reduce the amount of meta data that is generated, but
                it takes time and effort.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>

        <FaqSection
          title={
            <h3
              id="faq-account"
              className="text-2xl font-extrabold text-gray-900"
            >
              Account
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="Why are there no passwords to authenticate?">
              <p>
                Your devices have stored secret keys which are used to
                authenticate them yourself with the server using public-key
                cryptography.
              </p>
              <p className="mt-2">
                This is one of the reasons why it's recommended to connect
                multiple devices. Losing your one and only key would mean that
                your account is lost.
              </p>
            </FaqEntry>
            <FaqEntry title="How can I restore my account?">
              <p>
                Unfortunately if you loose all your linked devices all your
                notes, contact and device names can't be restored.
              </p>
              <p className="mt-2">
                For now we highly recommend to link multiple devices to avoid
                your data being unrecoverable. In the future we want to
                establish a secure backup and restore mechanism.
              </p>
            </FaqEntry>
            <FaqEntry title="How can I export all my data?">
              <p>
                Unfortunately the only way is to copy & paste each note
                manually. In the future we want provide an export functionality.
              </p>
            </FaqEntry>
            <FaqEntry title="How can I delete my account?">
              <p>
                Find the "Delete User Account" button in the application's
                settings area.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>

        <FaqSection
          title={
            <h3
              id="faq-applications"
              className="text-2xl font-extrabold text-gray-900"
            >
              Applications
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="Why is there no web client on the roadmap?">
              <p>
                We might build one in the future, but first we want to focus on
                mobile and desktop client.
              </p>
            </FaqEntry>
            <FaqEntry title="When will the desktop apps be ready?">
              <p>We hope to have the macOS and Windows latest by mid 2022.</p>
              <p className="mt-2">
                In case you have an Apple computer with an M1 processor you can
                install the{" "}
                <a href="https://apps.apple.com/app/serenity-notes/id1544162074">
                  iPad app
                </a>{" "}
                on your macOS.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>

        <FaqSection
          title={
            <h3
              id="faq-infrastructure"
              className="text-2xl font-extrabold text-gray-900"
            >
              Infrastructure
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="Where are the servers hosted and why do we use this services?">
              <p>
                At the moment Heroku is used for the servers and the database.
                Heroku is a US company, but the database and all instances are
                located in Europe.
              </p>
              <p className="mt-2">
                While Heroku offers a great product we are considering to
                migrate our services to a European hosting provider in the long
                run.
              </p>
            </FaqEntry>
            <FaqEntry title="Why does server location matter if the content is end-to-end encrypted?">
              <p>
                While the content itself is encrypted meta data such as who
                shares documents with whom and when updates took place exist.
              </p>
              <p className="mt-2">
                This can be valuable information and that's why we care to store
                the encrypted data in a secure location.
              </p>
            </FaqEntry>
            <FaqEntry title="Can I synchronize my data via iCloud?">
              <p>
                No, it's not possible and we don't intend provide this
                functionality. It's important to us to offer the service across
                multiple platforms. An integration into iCloud doesn't align
                with this goal.
              </p>
            </FaqEntry>
            <FaqEntry title="Why the .re top-level domain?">
              <p className="mt-2">
                .re is administered by{" "}
                <a href="https://www.afnic.fr/en/">AFNIC</a> which also operates
                the .fr top-level domain. Since we are a European company it was
                important to us to use a top-level domain managed by a European
                organization.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>

        <FaqSection
          title={
            <h3
              id="faq-open-source"
              className="text-2xl font-extrabold text-gray-900"
            >
              Open Source
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="Is it Open Source?">
              <p>
                You can find the source code for the iOS/Android application{" "}
                <a href="https://github.com/serenity-kit/serenity-notes-clients">
                  here
                </a>
                .
              </p>
              <p className="mt-2">
                The server code is not open source yet and won't be for a
                forseeable future.
              </p>
              <p className="mt-2">
                In order to verify the security of Serenity Notes it shouldn't
                be necessary to expose the server code. The clients should never
                accept a note, contact or device that hasn't been added or
                verified by the user.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>

        <FaqSection
          title={
            <h3
              id="faq-technical-information"
              className="text-2xl font-extrabold text-gray-900"
            >
              Technical Information
            </h3>
          }
        >
          <dl className="space-y-12">
            <FaqEntry title="How are notes stored?">
              <p>
                Notes are stored as a base64 encoded string of a Yjs CRDT
                document. To learn more about Yjs visit{" "}
                <a href="https://github.com/yjs/yjs">
                  https://github.com/yjs/yjs
                </a>
                .
              </p>
            </FaqEntry>
            <FaqEntry title="Why implement a custom protocol and not rather use thre Matrix protocol?">
              <p>
                Matrix is a great protocol for messaging systems, but when
                exchanging data to represent a document receiving and decrypting
                every change would be very ineffecient.
              </p>
              <p className="mt-2">
                Our protocol, while still naive, is already more effiecient in
                most cases. We are always encrypting the full CRDT data
                structure (with tombstones for deleted sections) and sending it
                to the server. Other clients then only need to fetch the last
                message. While still very inefficient it works already quite
                well when not too many devices exchange smaller documents.
              </p>
              <p className="mt-2">
                There are further optimization possible like using snapshots in
                combination with change messages. In order to implement such
                optimization we would need to fork Matrix or convince them to
                adapt the protocol. Instead we decided develop our own protocol
                with the believe that this will allow us better to experiment on
                the protocol and evolve it faster.
              </p>
              <p className="mt-2">
                That doesn't mean the Matrix Protocol can't have such
                optimisations and we would be happy to share our findings and
                collaborate.
              </p>
            </FaqEntry>
            <FaqEntry title="Why is the protocol not documented?">
              <p>
                Its something we want to do, but other topics are more important
                to us right now.
              </p>
            </FaqEntry>
            <FaqEntry title="Why is the protocol not federated like Matrix?">
              <p>
                While we like the idea of federation it creates a lot of
                overhead for engineering. We feel it would be too effort at this
                point and rather want to focus on privacy and good user
                experience.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>
      </div>
    </div>
  );
}
