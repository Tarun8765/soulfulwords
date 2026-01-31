import { SocialIcon } from "react-social-icons";
import data from "../../data/socialLinks.json";

function socialLinks() {
  return (
    <div className="flex gap-1 justify-center mt-4 lg:justify-start">
      {data?.socialLink?.map((links) => {
        return (
          <SocialIcon
            key={links.icon}
            className="socialLinks"
            bgColor="hsl(40 33% 98%)"
            fgColor="hsl(215.4 16.3% 46.9%)"
            style={{
              width: "42px",
              height: "42px ",
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
