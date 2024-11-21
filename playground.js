const userReg = RegExp(
    /^https?:\/\/(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+(?:-[a-zA-Z0-9]{5,})\/?/
);

let processedUsers = [];

const handleNewUser = (u) => {
    const userLink = u.querySelector(".mn-connection-card__link");
    if (processedUsers.includes(userLink.href)) return;
    processedUsers.push(userLink.href);
    if (userReg.exec(userLink.href)) {
        const userRealName = u.querySelector(
            ".mn-connection-card__name"
        ).innerText;

        console.log(userRealName);

        try {
            let button = document.createElement("div");
            button.classList.add("entry-point");

            let buttonElement = document.createElement("button");
            buttonElement.ariaLabel = `Message ${userRealName} with username suggestion`;
            buttonElement.className =
                "artdeco-button artdeco-button--2 artdeco-button--primary ember-view";
            buttonElement.style.marginRight = "8px";

            let buttonText = document.createElement("span");
            buttonText.className = "artdeco-button__text";
            buttonText.innerText = "✨";

            buttonElement.appendChild(buttonText);
            button.appendChild(buttonElement);

            u.querySelector(".mn-connection-card__action-container").prepend(
                button
            );
        } catch (e) {
            console.error("Failed to add button", e);
        }
    }
};

document.querySelectorAll(".mn-connection-card").forEach((u) => {
    handleNewUser(u);
});

const startObserving = () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.classList.contains("mn-connection-card")) {
                handleNewUser(mutation.target);
            }
        });
    });

    observer.observe(
        document.querySelector(".scaffold-finite-scroll__content > ul"),
        {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
        }
    );

    return observer;
};

startObserving();
