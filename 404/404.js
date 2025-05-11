function home() {
    window.location.href = "https://jpwaters09.github.io";
}

function homeLink() {
    window.location.href = "https://jpwaters09.github.io";
}

function projectsLink() {
    window.location.href = "https://jpwaters09.github.io/projects";
}

function contactLink() {
    window.location.href = "https://jpwaters09.github.io/contactme";
}

function aboutLink() {
    window.location.href = "https://jpwaters09.github.io/about";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homeLink").addEventListener("mouseenter", () => {
        document.getElementById("homeUnderline").style.visibility = "visible";
        document.getElementById("homeUnderline").style.width = "100%";
    });

    document.getElementById("homeLink").addEventListener("mouseleave", () => {
        document.getElementById("homeUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("homeUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("projectsLink").addEventListener("mouseenter", () => {
        document.getElementById("projectsUnderline").style.visibility = "visible";
        document.getElementById("projectsUnderline").style.width = "100%";
    });

    document.getElementById("projectsLink").addEventListener("mouseleave", () => {
        document.getElementById("projectsUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("projectsUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("contactLink").addEventListener("mouseenter", () => {
        document.getElementById("contactUnderline").style.visibility = "visible";
        document.getElementById("contactUnderline").style.width = "100%";
    });

    document.getElementById("contactLink").addEventListener("mouseleave", () => {
        document.getElementById("contactUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("contactUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("aboutLink").addEventListener("mouseenter", () => {
        document.getElementById("aboutUnderline").style.visibility = "visible";
        document.getElementById("aboutUnderline").style.width = "100%";
    });

    document.getElementById("aboutLink").addEventListener("mouseleave", () => {
        document.getElementById("aboutUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("aboutUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerWebsite").addEventListener("mouseenter", () => {
        document.getElementById("footerWebsiteUnderline").style.visibility = "visible";
        document.getElementById("footerWebsiteUnderline").style.width = "100%";
    });

    document.getElementById("footerWebsite").addEventListener("mouseleave", () => {
        document.getElementById("footerWebsiteUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerWebsiteUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerEmail").addEventListener("mouseenter", () => {
        document.getElementById("footerEmailUnderline").style.visibility = "visible";
        document.getElementById("footerEmailUnderline").style.width = "100%";
    });

    document.getElementById("footerEmail").addEventListener("mouseleave", () => {
        document.getElementById("footerEmailUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerEmailUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerGitHub").addEventListener("mouseenter", () => {
        document.getElementById("footerGitHubUnderline").style.visibility = "visible";
        document.getElementById("footerGitHubUnderline").style.width = "100%";
    });

    document.getElementById("footerGitHub").addEventListener("mouseleave", () => {
        document.getElementById("footerGitHubUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerGitHubUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerX").addEventListener("mouseenter", () => {
        document.getElementById("footerXUnderline").style.visibility = "visible";
        document.getElementById("footerXUnderline").style.width = "100%";
    });

    document.getElementById("footerX").addEventListener("mouseleave", () => {
        document.getElementById("footerXUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerXUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerPatreon").addEventListener("mouseenter", () => {
        document.getElementById("footerPatreonUnderline").style.visibility = "visible";
        document.getElementById("footerPatreonUnderline").style.width = "100%";
    });

    document.getElementById("footerPatreon").addEventListener("mouseleave", () => {
        document.getElementById("footerPatreonUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerPatreonUnderline").style.visibility = "hidden";
        }, 300)
    });

    document.getElementById("footerPayPal").addEventListener("mouseenter", () => {
        document.getElementById("footerPayPalUnderline").style.visibility = "visible";
        document.getElementById("footerPayPalUnderline").style.width = "100%";
    });

    document.getElementById("footerPayPal").addEventListener("mouseleave", () => {
        document.getElementById("footerPayPalUnderline").style.width = "0";

        setTimeout(() => {
            document.getElementById("footerPayPalUnderline").style.visibility = "hidden";
        }, 300)
    });
});

function footerWebsite() {
    window.location.href = "https://jpwaters09.github.io";
}

function footerEmail() {
    window.location.href = "mailto:jpwaters09.business@gmail.com";
}

function footerGitHub() {
    window.open("https://github.com/jpwaters09");
}

function footerX() {
    window.open("https://x.com/jpwaters09");
}

function footerPatreon() {
    window.open("https://patreon.com/jpwaters09");
}

function footerPayPal() {
    window.open("https://paypal.me/jacobw120");
}
