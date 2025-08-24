import { useEffect } from "react";

function TawkChat() {
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/68aac6dad2578f19249b41e9/1j3dhhi90';
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }, []);

  return null;
}

export default TawkChat;
