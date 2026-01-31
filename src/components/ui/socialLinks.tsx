import { SocialIcon } from "react-social-icons";
import data from "../../data/socialLinks.json";

function socialLinks({ position }) {
  return (
    <div className={`flex gap-1 ${position} mt-4  lg:justify-start`}>
      {data?.socialLink?.map((links) => {
        return (
          <SocialIcon
            key={links.icon}
            className="socialLinks"
            bgColor="transparent"
            fgColor="hsl(215.4 16.3% 46.9%)"
            style={{
              width: "40px",
              height: "40px ",
              color: "hsl(var(--muted-foreground))",
            }}
            url={links.url}
          />
        );
      })}
    </div>
  );
}

export default socialLinks;
