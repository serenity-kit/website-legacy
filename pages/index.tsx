import TextSection from "../components/TextSection";
import UnorderedList from "../components/UnorderedList";
import { H1, H2 } from "../components/Headline";

export default function Home() {
  return (
    <TextSection>
      <H1>Serenity Notes</H1>
      <p>… because you should own your data.</p>
      <H2>Features</H2>
      <UnorderedList>
        <li>Offline first</li>
        <li>End to end encrypted</li>
        <li>Collaborative editing</li>
        <li>Platform independent</li>
      </UnorderedList>
      <H2>Clients</H2>
      <UnorderedList>
        <li>iOS (iPhone & iPad)</li>
        <li>Android</li>
        <li>macOS (coming soon)</li>
        <li>Windows (coming soon)</li>
        <li>Linux (coming 2021)</li>
      </UnorderedList>
      <p>
        <br />
        Coming soon …
      </p>
    </TextSection>
  );
}
