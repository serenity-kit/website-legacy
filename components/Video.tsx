import Plyr from "plyr-react";
import "plyr-react/plyr.css";

type Props = {
  title: string;
  sources: Plyr.Source[];
  className?: string;
};

const FormError: React.FC<Props> = (props) => (
  <Plyr
    source={{
      type: "video",
      title: props.title,
      sources: props.sources,
    }}
    options={{
      muted: true,
      controls: ["play-large", "progress", "fullscreen"],
    }}
    className={
      props.className ? `plyr-react plyr ${props.className}` : "plyr-react plyr"
    }
  />
);

export default FormError;
