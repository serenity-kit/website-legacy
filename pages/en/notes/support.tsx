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
              <p>
                For example when you share a note with someone the server won't
                know the content, but is aware that you two collaborate together
                on one note.
              </p>
              <p>Here are few examples of meta data:</p>
              <ul className="list-disc pl-6">
                <li>Amount of notes</li>
                <li>Amount of updates per note</li>
                <li>Who your contacts are (based on IDs)</li>
              </ul>
              <p>
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
              <p>
                This is one of the reasons why it's recommended to connect
                multiple devices. Losing your one and only key would mean that
                your account is lost.
              </p>
            </FaqEntry>
            <FaqEntry title="How can I restore my account?">
              <p>
                Unfortionatly if you loose all your linked devices all your
                notes, contact and device names can't be restored.
              </p>
              <p>
                For now we highly recommend to recommend to link multiple
                devices to avoid your data being unrecoverable. In the future we
                want to establish a secure backup and restore mechanism.
              </p>
            </FaqEntry>
            <FaqEntry title="How can I export all my data?">
              <p>
                Unfortionatly the only way is to copy & paste each note
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
              <p>We hope to have the macOS and Windows latest by mid 2021.</p>
              <p>
                In case you have an Apple computer with an M1 processor you can
                install the{" "}
                <a href="https://apps.apple.com/at/app/serenity-notes/id1544162074">
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
              <p>
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
              <p>
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
                <a href="https://github.com/SerenityNotes/serenity-notes-clients">
                  here
                </a>
                .
              </p>
              <p>
                The server code is not open source yet and won't for a
                forseeable future for the following reasons:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  To avoid that some well funded company takes the existing work
                  with little to no effort, makes a business out of and harms
                  the productization of Serenity Notes.
                </li>
                <li>
                  It shouldn't be necessary to expose the server code, since the
                  clients should never accept a note, contact or device that
                  hasn't been added or verified by the user.
                </li>
              </ul>
            </FaqEntry>
            <FaqEntry title="Why is the protocol not documented?">
              <p>
                We initially started out with the ambition to have an Open
                Source protocol, but noticed during the development that the
                protocol changed constantly. While the current version works and
                is stable, we are already considering several optimizations.
                Therefore we don't feel comfortable to put lots of effort in
                documenting and maintaining the current state.
              </p>
            </FaqEntry>
          </dl>
        </FaqSection>
      </div>
    </div>
  );
}