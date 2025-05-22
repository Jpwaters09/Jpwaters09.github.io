////////////////////////////////////////////////
// Jpwaters09.github.io Contact Page          //
// Language: JavaScript                       //
// Author: Jacob Waters                       //
// Github: github.com/jpwaters09              //
// Copyright (c) 2025 Jacob Waters            //
// Contact me: jpwaters09.business@gmail.com  //
////////////////////////////////////////////////

let theme;

let fromFocused = 0;
let subjectFocused = 0;
let bodyFocused = 0;

function home() {
    window.location.href = "https://Jpwaters09.github.io";
}

function homeLink() {
    window.location.href = "https://Jpwaters09.github.io";
}

function projectsLink() {
    window.location.href = "https://Jpwaters09.github.io/Projects";
}

function contactLink() {
    window.location.href = "https://Jpwaters09.github.io/Contact";
}

function aboutLink() {
    window.location.href = "https://Jpwaters09.github.io/About";
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("Theme") == "0") {
        document.getElementById("toggle").style.transform = "translateX(26px)";
        document.getElementById("toggleSwitch").style.backgroundColor = "#393939";
        document.getElementById("toggle").style.backgroundColor = "#494949";

        document.body.style.backgroundColor = "#191919";
        document.getElementById("topbar").style.backgroundColor = "#292929";
        document.getElementById("from").style.backgroundColor = "#292929";
        document.getElementById("subject").style.backgroundColor = "#292929";
        document.getElementById("body").style.backgroundColor = "#292929";
        document.getElementById("sendBtn").style.backgroundColor = "#292929";
        document.getElementById("footer").style.backgroundColor = "#292929";

        document.getElementById("homeBtn").style.color = "#ffffff";
        document.getElementById("homeLink").style.color = "#ffffff";
        document.getElementById("projectsLink").style.color = "#ffffff";
        document.getElementById("contactLink").style.color = "#ffffff";
        document.getElementById("aboutLink").style.color = "#ffffff";
        document.getElementById("modeSwitchSpan").style.color = "#ffffff";
        document.getElementById("footerTitle").style.color = "#ffffff";
        document.getElementById("footerSubtitle").style.color = "#ffffff";
        document.getElementById("footerEmailSpan").style.color = "#ffffff";
        document.getElementById("footerWebsiteSpan").style.color = "#ffffff";
        document.getElementById("footerGitHubSpan").style.color = "#ffffff";
        document.getElementById("footerXSpan").style.color = "#ffffff";
        document.getElementById("footerPatreonSpan").style.color = "#ffffff";
        document.getElementById("footerPayPalSpan").style.color = "#ffffff";
        document.getElementById("footerEmail").style.color = "#ffffff";
        document.getElementById("footerWebsite").style.color = "#ffffff";
        document.getElementById("footerGitHub").style.color = "#ffffff";
        document.getElementById("footerX").style.color = "#ffffff";
        document.getElementById("footerPatreon").style.color = "#ffffff";
        document.getElementById("footerPayPal").style.color = "#ffffff";
        document.getElementById("getInTouch").style.color = "#ffffff";
        document.getElementById("from").style.caretColor = "#ffffff";
        document.getElementById("from").style.color = "#ffffff";
        document.getElementById("subject").style.caretColor = "#ffffff";
        document.getElementById("subject").style.color = "#ffffff";
        document.getElementById("body").style.caretColor = "#ffffff";
        document.getElementById("body").style.color = "#ffffff";
        document.getElementById("sendBtn").style.color = "#ffffff";

        document.getElementById("homeUnderline").style.border = "1px solid #dddddd";
        document.getElementById("projectsUnderline").style.border = "1px solid #dddddd";
        document.getElementById("contactUnderline").style.border = "1px solid #dddddd";
        document.getElementById("aboutUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerEmailUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerWebsiteUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerGitHubUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerXUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerPatreonUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerPayPalUnderline").style.border = "1px solid #dddddd";

        document.getElementById("footerEmailIcon").src = "../Assets/Dark/Email Icon.svg";
        document.getElementById("footerWebsiteIcon").src = "../Assets/Dark/Website Icon.svg";
        document.getElementById("footerGitHubIcon").src = "../Assets/Dark/GitHub Icon.svg";
        document.getElementById("footerXIcon").src = "../Assets/Dark/X Icon.svg";
        document.getElementById("footerPatreonIcon").src = "../Assets/Dark/Patreon Icon.svg";
        document.getElementById("footerPayPalIcon").src = "../Assets/Dark/PayPal Icon.svg";

        setTimeout(() => {
            document.body.classList.add("transition");
            document.getElementById("topbar").classList.add("transition");
            document.getElementById("toggle").classList.add("transition");
            document.getElementById("toggleSwitch").classList.add("transition");
            document.getElementById("from").classList.add("transition");
            document.getElementById("subject").classList.add("transition");
            document.getElementById("body").classList.add("transition");
            document.getElementById("sendBtn").classList.add("transition");
            document.getElementById("footer").classList.add("transition");

            document.getElementById("homeBtn").classList.add("transition");
            document.getElementById("homeLink").classList.add("transition");
            document.getElementById("projectsLink").classList.add("transition");
            document.getElementById("contactLink").classList.add("transition");
            document.getElementById("aboutLink").classList.add("transition");
            document.getElementById("modeSwitchSpan").classList.add("transition");
            document.getElementById("footerTitle").classList.add("transition");
            document.getElementById("footerSubtitle").classList.add("transition");
            document.getElementById("footerEmailSpan").classList.add("transition");
            document.getElementById("footerWebsiteSpan").classList.add("transition");
            document.getElementById("footerGitHubSpan").classList.add("transition");
            document.getElementById("footerXSpan").classList.add("transition");
            document.getElementById("footerPatreonSpan").classList.add("transition");
            document.getElementById("footerPayPalSpan").classList.add("transition");
            document.getElementById("footerEmail").classList.add("transition");
            document.getElementById("footerWebsite").classList.add("transition");
            document.getElementById("footerGitHub").classList.add("transition");
            document.getElementById("footerX").classList.add("transition");
            document.getElementById("footerPatreon").classList.add("transition");
            document.getElementById("footerPayPal").classList.add("transition");
            document.getElementById("getInTouch").classList.add("transition");
        }, 300);

        theme = 0;
    }

    else {
        document.getElementById("toggle").style.transform = "translateX(0)";
        document.getElementById("toggleSwitch").style.backgroundColor = "#c9c9c9";
        document.getElementById("toggle").style.backgroundColor = "#b9b9b9";

        document.body.style.backgroundColor = "#e9e9e9";
        document.getElementById("topbar").style.backgroundColor = "#d9d9d9";
        document.getElementById("from").style.backgroundColor = "#d9d9d9";
        document.getElementById("subject").style.backgroundColor = "#d9d9d9";
        document.getElementById("body").style.backgroundColor = "#d9d9d9";
        document.getElementById("sendBtn").style.backgroundColor = "#d9d9d9";
        document.getElementById("footer").style.backgroundColor = "#d9d9d9";

        document.getElementById("homeBtn").style.color = "#000000";
        document.getElementById("homeLink").style.color = "#000000";
        document.getElementById("projectsLink").style.color = "#000000";
        document.getElementById("contactLink").style.color = "#000000";
        document.getElementById("aboutLink").style.color = "#000000";
        document.getElementById("modeSwitchSpan").style.color = "#000000";
        document.getElementById("footerTitle").style.color = "#000000";
        document.getElementById("footerSubtitle").style.color = "#000000";
        document.getElementById("footerEmailSpan").style.color = "#000000";
        document.getElementById("footerWebsiteSpan").style.color = "#000000";
        document.getElementById("footerGitHubSpan").style.color = "#000000";
        document.getElementById("footerXSpan").style.color = "#000000";
        document.getElementById("footerPatreonSpan").style.color = "#000000";
        document.getElementById("footerPayPalSpan").style.color = "#000000";
        document.getElementById("footerEmail").style.color = "#000000";
        document.getElementById("footerWebsite").style.color = "#000000";
        document.getElementById("footerGitHub").style.color = "#000000";
        document.getElementById("footerX").style.color = "#000000";
        document.getElementById("footerPatreon").style.color = "#000000";
        document.getElementById("footerPayPal").style.color = "#000000";
        document.getElementById("getInTouch").style.color = "#000000";
        document.getElementById("from").style.caretColor = "#000000";
        document.getElementById("from").style.color = "#000000";
        document.getElementById("subject").style.caretColor = "#000000";
        document.getElementById("subject").style.color = "#000000";
        document.getElementById("body").style.caretColor = "#000000";
        document.getElementById("body").style.color = "#000000";
        document.getElementById("sendBtn").style.color = "#000000";

        document.getElementById("homeUnderline").style.border = "1px solid #222222";
        document.getElementById("projectsUnderline").style.border = "1px solid #222222";
        document.getElementById("contactUnderline").style.border = "1px solid #222222";
        document.getElementById("aboutUnderline").style.border = "1px solid #222222";
        document.getElementById("footerEmailUnderline").style.border = "1px solid #222222";
        document.getElementById("footerWebsiteUnderline").style.border = "1px solid #222222";
        document.getElementById("footerGitHubUnderline").style.border = "1px solid #222222";
        document.getElementById("footerXUnderline").style.border = "1px solid #222222";
        document.getElementById("footerPatreonUnderline").style.border = "1px solid #222222";
        document.getElementById("footerPayPalUnderline").style.border = "1px solid #222222";

        document.getElementById("footerEmailIcon").src = "../Assets/Light/Email Icon.svg";
        document.getElementById("footerWebsiteIcon").src = "../Assets/Light/Website Icon.svg";
        document.getElementById("footerGitHubIcon").src = "../Assets/Light/GitHub Icon.svg";
        document.getElementById("footerXIcon").src = "../Assets/Light/X Icon.svg";
        document.getElementById("footerPatreonIcon").src = "../Assets/Light/Patreon Icon.svg";
        document.getElementById("footerPayPalIcon").src = "../Assets/Light/PayPal Icon.svg";

        setTimeout(() => {
            document.body.classList.add("transition");
            document.getElementById("topbar").classList.add("transition");
            document.getElementById("toggle").classList.add("transition");
            document.getElementById("toggleSwitch").classList.add("transition");
            document.getElementById("from").classList.add("transition");
            document.getElementById("subject").classList.add("transition");
            document.getElementById("body").classList.add("transition");
            document.getElementById("sendBtn").classList.add("transition");
            document.getElementById("footer").classList.add("transition");

            document.getElementById("homeBtn").classList.add("transition");
            document.getElementById("homeLink").classList.add("transition");
            document.getElementById("projectsLink").classList.add("transition");
            document.getElementById("contactLink").classList.add("transition");
            document.getElementById("aboutLink").classList.add("transition");
            document.getElementById("modeSwitchSpan").classList.add("transition");
            document.getElementById("footerTitle").classList.add("transition");
            document.getElementById("footerSubtitle").classList.add("transition");
            document.getElementById("footerEmailSpan").classList.add("transition");
            document.getElementById("footerWebsiteSpan").classList.add("transition");
            document.getElementById("footerGitHubSpan").classList.add("transition");
            document.getElementById("footerXSpan").classList.add("transition");
            document.getElementById("footerPatreonSpan").classList.add("transition");
            document.getElementById("footerPayPalSpan").classList.add("transition");
            document.getElementById("footerEmail").classList.add("transition");
            document.getElementById("footerWebsite").classList.add("transition");
            document.getElementById("footerGitHub").classList.add("transition");
            document.getElementById("footerX").classList.add("transition");
            document.getElementById("footerPatreon").classList.add("transition");
            document.getElementById("footerPayPal").classList.add("transition");
            document.getElementById("getInTouch").classList.add("transition");
        }, 300);
        
        theme = 1;
    }

    document.getElementById("toggle").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("toggle").style.backgroundColor = "#595959";
        }

        else if (theme == 1) {
            document.getElementById("toggle").style.backgroundColor = "#a9a9a9";
        }
    });

    document.getElementById("toggle").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("toggle").style.backgroundColor = "#494949";
        }

        else if (theme == 1) {
            document.getElementById("toggle").style.backgroundColor = "#b9b9b9";
        }
    });

    document.getElementById("homeBtn").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("homeBtn").style.backgroundColor = "#393939";
        }

        else if (theme == 1) {
            document.getElementById("homeBtn").style.backgroundColor = "#c9c9c9";
        }
    });

    document.getElementById("homeBtn").addEventListener("mouseleave", () => {
        document.getElementById("homeBtn").style.backgroundColor = "#00000000";
    });

    document.getElementById("homeLink").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("homeLink").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("homeLink").style.color = "#222222";
        }

        document.getElementById("homeUnderline").style.visibility = "visible";
        document.getElementById("homeUnderline").style.width = "100%";
    });

    document.getElementById("homeLink").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("homeLink").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("homeLink").style.color = "#000000";
        }

        document.getElementById("homeUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("homeUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("projectsLink").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("projectsLink").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("projectsLink").style.color = "#222222";
        }

        document.getElementById("projectsUnderline").style.visibility = "visible";
        document.getElementById("projectsUnderline").style.width = "100%";
    });

    document.getElementById("projectsLink").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("projectsLink").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("projectsLink").style.color = "#000000";
        }

        document.getElementById("projectsUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("projectsUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("contactLink").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("contactLink").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("contactLink").style.color = "#222222";
        }

        document.getElementById("contactUnderline").style.visibility = "visible";
        document.getElementById("contactUnderline").style.width = "100%";
    });

    document.getElementById("contactLink").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("contactLink").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("contactLink").style.color = "#000000";
        }

        document.getElementById("contactUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("contactUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("aboutLink").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("aboutLink").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("aboutLink").style.color = "#222222";
        }

        document.getElementById("aboutUnderline").style.visibility = "visible";
        document.getElementById("aboutUnderline").style.width = "100%";
    });

    document.getElementById("aboutLink").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("aboutLink").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("aboutLink").style.color = "#000000";
        }

        document.getElementById("aboutUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("aboutUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("from").addEventListener("focus", () => {
        if (theme == 0) {
            document.getElementById("from").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("from").style.backgroundColor = "#c9c9c9";
        }

        fromFocused = 1;
    })

    document.getElementById("from").addEventListener("blur", () => {
        if (theme == 0) {
            document.getElementById("from").style.backgroundColor = "#292929";
        }
        
        else if (theme == 1) {
            document.getElementById("from").style.backgroundColor = "#d9d9d9";
        }

        fromFocused = 0;
    })

    document.getElementById("from").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("from").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("from").style.backgroundColor = "#c9c9c9";
        }
    })

    document.getElementById("from").addEventListener("mouseleave", () => {
        if (fromFocused == 0) {
            if (theme == 0) {
                document.getElementById("from").style.backgroundColor = "#292929";
            }
            
            else if (theme == 1) {
                document.getElementById("from").style.backgroundColor = "#d9d9d9";
            }
        }
    })

    document.getElementById("subject").addEventListener("focus", () => {
        if (theme == 0) {
            document.getElementById("subject").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("subject").style.backgroundColor = "#c9c9c9";
        }

        subjectFocused = 1;
    })

    document.getElementById("subject").addEventListener("blur", () => {
        if (theme == 0) {
            document.getElementById("subject").style.backgroundColor = "#292929";
        }
        
        else if (theme == 1) {
            document.getElementById("subject").style.backgroundColor = "#d9d9d9";
        }

        subjectFocused = 0;
    })

    document.getElementById("subject").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("subject").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("subject").style.backgroundColor = "#c9c9c9";
        }
    })

    document.getElementById("subject").addEventListener("mouseleave", () => {
        if (subjectFocused == 0) {
            if (theme == 0) {
                document.getElementById("subject").style.backgroundColor = "#292929";
            }
            
            else if (theme == 1) {
                document.getElementById("subject").style.backgroundColor = "#d9d9d9";
            }
        }
    })

    document.getElementById("body").addEventListener("focus", () => {
        if (theme == 0) {
            document.getElementById("body").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("body").style.backgroundColor = "#c9c9c9";
        }

        bodyFocused = 1;
    })

    document.getElementById("body").addEventListener("blur", () => {
        if (theme == 0) {
            document.getElementById("body").style.backgroundColor = "#292929";
        }
        
        else if (theme == 1) {
            document.getElementById("body").style.backgroundColor = "#d9d9d9";
        }

        bodyFocused = 0;
    })

    document.getElementById("body").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("body").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("body").style.backgroundColor = "#c9c9c9";
        }
    })

    document.getElementById("body").addEventListener("mouseleave", () => {
        if (bodyFocused == 0) {
            if (theme == 0) {
                document.getElementById("body").style.backgroundColor = "#292929";
            }
            
            else if (theme == 1) {
                document.getElementById("body").style.backgroundColor = "#d9d9d9";
            }
        }
    })

    document.getElementById("sendBtn").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("sendBtn").style.backgroundColor = "#393939";
        }
        
        else if (theme == 1) {
            document.getElementById("sendBtn").style.backgroundColor = "#c9c9c9";
        }
    })

    document.getElementById("sendBtn").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("sendBtn").style.backgroundColor = "#292929";
        }
        
        else if (theme == 1) {
            document.getElementById("sendBtn").style.backgroundColor = "#d9d9d9";
        }
    })

    document.getElementById("footerEmail").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerEmail").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerEmail").style.color = "#222222";
        }

        document.getElementById("footerEmailUnderline").style.visibility = "visible";
        document.getElementById("footerEmailUnderline").style.width = "100%";
    });

    document.getElementById("footerEmail").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerEmail").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerEmail").style.color = "#000000";
        }

        document.getElementById("footerEmailUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerEmailUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerWebsite").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerWebsite").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerWebsite").style.color = "#222222";
        }

        document.getElementById("footerWebsiteUnderline").style.visibility = "visible";
        document.getElementById("footerWebsiteUnderline").style.width = "100%";
    });

    document.getElementById("footerWebsite").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerWebsite").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerWebsite").style.color = "#000000";
        }

        document.getElementById("footerWebsiteUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerWebsiteUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerGitHub").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerGitHub").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerGitHub").style.color = "#222222";
        }

        document.getElementById("footerGitHubUnderline").style.visibility = "visible";
        document.getElementById("footerGitHubUnderline").style.width = "100%";
    });

    document.getElementById("footerGitHub").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerGitHub").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerGitHub").style.color = "#000000";
        }

        document.getElementById("footerGitHubUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerGitHubUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerX").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerX").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerX").style.color = "#222222";
        }

        document.getElementById("footerXUnderline").style.visibility = "visible";
        document.getElementById("footerXUnderline").style.width = "100%";
    });

    document.getElementById("footerX").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerX").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerX").style.color = "#000000";
        }

        document.getElementById("footerXUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerXUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerPatreon").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerPatreon").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerPatreon").style.color = "#222222";
        }

        document.getElementById("footerPatreonUnderline").style.visibility = "visible";
        document.getElementById("footerPatreonUnderline").style.width = "100%";
    });

    document.getElementById("footerPatreon").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerPatreon").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerPatreon").style.color = "#000000";
        }

        document.getElementById("footerPatreonUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerPatreonUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerPayPal").addEventListener("mouseenter", () => {
        if (theme == 0) {
            document.getElementById("footerPayPal").style.color = "#dddddd";
        }
        
        else if (theme == 1) {
            document.getElementById("footerPayPal").style.color = "#222222";
        }

        document.getElementById("footerPayPalUnderline").style.visibility = "visible";
        document.getElementById("footerPayPalUnderline").style.width = "100%";
    });

    document.getElementById("footerPayPal").addEventListener("mouseleave", () => {
        if (theme == 0) {
            document.getElementById("footerPayPal").style.color = "#ffffff";
        }
        
        else if (theme == 1) {
            document.getElementById("footerPayPal").style.color = "#000000";
        }

        document.getElementById("footerPayPalUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerPayPalUnderline").style.visibility = "hidden";
        }, 300)
    });
});

function footerWebsite() {
    window.location.href = "https://Jpwaters09.github.io";
}

function footerEmail() {
    window.location.href = "mailto:jpwaters09.business@gmail.com";
}

function footerGitHub() {
    window.open("https://github.com/Jpwaters09");
}

function footerX() {
    window.open("https://x.com/Jpwaters09");
}

function footerPatreon() {
    window.open("https://patreon.com/Jpwaters09");
}

function footerPayPal() {
    window.open("https://paypal.me/JacobW120");
}

function toggle() {
    if (theme == 0) {
        document.getElementById("toggle").style.transform = "translateX(0)";
        document.getElementById("toggleSwitch").style.backgroundColor = "#c9c9c9";
        document.getElementById("toggle").style.backgroundColor = "#b9b9b9";

        document.body.style.backgroundColor = "#e9e9e9";
        document.getElementById("topbar").style.backgroundColor = "#d9d9d9";
        document.getElementById("from").style.backgroundColor = "#d9d9d9";
        document.getElementById("subject").style.backgroundColor = "#d9d9d9";
        document.getElementById("body").style.backgroundColor = "#d9d9d9";
        document.getElementById("sendBtn").style.backgroundColor = "#d9d9d9";
        document.getElementById("footer").style.backgroundColor = "#d9d9d9";

        document.getElementById("homeBtn").style.color = "#000000";
        document.getElementById("homeLink").style.color = "#000000";
        document.getElementById("projectsLink").style.color = "#000000";
        document.getElementById("contactLink").style.color = "#000000";
        document.getElementById("aboutLink").style.color = "#000000";
        document.getElementById("modeSwitchSpan").style.color = "#000000";
        document.getElementById("footerTitle").style.color = "#000000";
        document.getElementById("footerSubtitle").style.color = "#000000";
        document.getElementById("footerEmailSpan").style.color = "#000000";
        document.getElementById("footerWebsiteSpan").style.color = "#000000";
        document.getElementById("footerGitHubSpan").style.color = "#000000";
        document.getElementById("footerXSpan").style.color = "#000000";
        document.getElementById("footerPatreonSpan").style.color = "#000000";
        document.getElementById("footerPayPalSpan").style.color = "#000000";
        document.getElementById("footerEmail").style.color = "#000000";
        document.getElementById("footerWebsite").style.color = "#000000";
        document.getElementById("footerGitHub").style.color = "#000000";
        document.getElementById("footerX").style.color = "#000000";
        document.getElementById("footerPatreon").style.color = "#000000";
        document.getElementById("footerPayPal").style.color = "#000000";
        document.getElementById("getInTouch").style.color = "#000000";
        document.getElementById("from").style.caretColor = "#000000";
        document.getElementById("from").style.color = "#000000";
        document.getElementById("subject").style.caretColor = "#000000";
        document.getElementById("subject").style.color = "#000000";
        document.getElementById("body").style.caretColor = "#000000";
        document.getElementById("body").style.color = "#000000";
        document.getElementById("sendBtn").style.color = "#000000";

        document.getElementById("homeUnderline").style.border = "1px solid #222222";
        document.getElementById("projectsUnderline").style.border = "1px solid #222222";
        document.getElementById("contactUnderline").style.border = "1px solid #222222";
        document.getElementById("aboutUnderline").style.border = "1px solid #222222";
        document.getElementById("footerEmailUnderline").style.border = "1px solid #222222";
        document.getElementById("footerWebsiteUnderline").style.border = "1px solid #222222";
        document.getElementById("footerGitHubUnderline").style.border = "1px solid #222222";
        document.getElementById("footerXUnderline").style.border = "1px solid #222222";
        document.getElementById("footerPatreonUnderline").style.border = "1px solid #222222";
        document.getElementById("footerPayPalUnderline").style.border = "1px solid #222222";

        document.getElementById("footerEmailIcon").src = "../Assets/Light/Email Icon.svg";
        document.getElementById("footerWebsiteIcon").src = "../Assets/Light/Website Icon.svg";
        document.getElementById("footerGitHubIcon").src = "../Assets/Light/GitHub Icon.svg";
        document.getElementById("footerXIcon").src = "../Assets/Light/X Icon.svg";
        document.getElementById("footerPatreonIcon").src = "../Assets/Light/Patreon Icon.svg";
        document.getElementById("footerPayPalIcon").src = "../Assets/Light/PayPal Icon.svg";
        
        theme = 1;
        localStorage.setItem("Theme", "1");
    }

    else if (theme == 1) {
        document.getElementById("toggle").style.transform = "translateX(26px)";
        document.getElementById("toggleSwitch").style.backgroundColor = "#393939";
        document.getElementById("toggle").style.backgroundColor = "#494949";

        document.body.style.backgroundColor = "#191919";
        document.getElementById("topbar").style.backgroundColor = "#292929";
        document.getElementById("from").style.backgroundColor = "#292929";
        document.getElementById("subject").style.backgroundColor = "#292929";
        document.getElementById("body").style.backgroundColor = "#292929";
        document.getElementById("sendBtn").style.backgroundColor = "#292929";
        document.getElementById("footer").style.backgroundColor = "#292929";

        document.getElementById("homeBtn").style.color = "#ffffff";
        document.getElementById("homeLink").style.color = "#ffffff";
        document.getElementById("projectsLink").style.color = "#ffffff";
        document.getElementById("contactLink").style.color = "#ffffff";
        document.getElementById("aboutLink").style.color = "#ffffff";
        document.getElementById("modeSwitchSpan").style.color = "#ffffff";
        document.getElementById("footerTitle").style.color = "#ffffff";
        document.getElementById("footerSubtitle").style.color = "#ffffff";
        document.getElementById("footerEmailSpan").style.color = "#ffffff";
        document.getElementById("footerWebsiteSpan").style.color = "#ffffff";
        document.getElementById("footerGitHubSpan").style.color = "#ffffff";
        document.getElementById("footerXSpan").style.color = "#ffffff";
        document.getElementById("footerPatreonSpan").style.color = "#ffffff";
        document.getElementById("footerPayPalSpan").style.color = "#ffffff";
        document.getElementById("footerEmail").style.color = "#ffffff";
        document.getElementById("footerWebsite").style.color = "#ffffff";
        document.getElementById("footerGitHub").style.color = "#ffffff";
        document.getElementById("footerX").style.color = "#ffffff";
        document.getElementById("footerPatreon").style.color = "#ffffff";
        document.getElementById("footerPayPal").style.color = "#ffffff";
        document.getElementById("getInTouch").style.color = "#ffffff";
        document.getElementById("from").style.caretColor = "#ffffff";
        document.getElementById("from").style.color = "#ffffff";
        document.getElementById("subject").style.caretColor = "#ffffff";
        document.getElementById("subject").style.color = "#ffffff";
        document.getElementById("body").style.caretColor = "#ffffff";
        document.getElementById("body").style.color = "#ffffff";
        document.getElementById("sendBtn").style.color = "#ffffff";

        document.getElementById("homeUnderline").style.border = "1px solid #dddddd";
        document.getElementById("projectsUnderline").style.border = "1px solid #dddddd";
        document.getElementById("contactUnderline").style.border = "1px solid #dddddd";
        document.getElementById("aboutUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerEmailUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerWebsiteUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerGitHubUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerXUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerPatreonUnderline").style.border = "1px solid #dddddd";
        document.getElementById("footerPayPalUnderline").style.border = "1px solid #dddddd";

        document.getElementById("footerEmailIcon").src = "../Assets/Dark/Email Icon.svg";
        document.getElementById("footerWebsiteIcon").src = "../Assets/Dark/Website Icon.svg";
        document.getElementById("footerGitHubIcon").src = "../Assets/Dark/GitHub Icon.svg";
        document.getElementById("footerXIcon").src = "../Assets/Dark/X Icon.svg";
        document.getElementById("footerPatreonIcon").src = "../Assets/Dark/Patreon Icon.svg";
        document.getElementById("footerPayPalIcon").src = "../Assets/Dark/PayPal Icon.svg";

        theme = 0;
        localStorage.setItem("Theme", "0");
    }
}

function sendEmail() {
    let notCompleted = document.getElementById("notCompleted");
    let from = document.getElementById("from");
    let subject = document.getElementById("subject");
    let body = document.getElementById("body");

    if (!from.value) {
        notCompleted.style.display = "";
        return;
    }

    else if (!subject.value) {
        notCompleted.style.display = "";
        return;
    }

    else if (!body.value) {
        notCompleted.style.display = "";
        return;
    }

    let emailSubject = encodeURIComponent(subject.value);
    let emailBody = encodeURIComponent(body.value + "\n\nFrom: " + from.value);

    window.location.href = `mailto:jpwaters09.business@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    from.value = "";
    subject.value = "";
    body.value = "";
}