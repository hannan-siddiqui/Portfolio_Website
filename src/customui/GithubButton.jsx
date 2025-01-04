import React from "react";

const GithubButton = () => {
  return (
    <div>
      <style>
        {`
.cart-button {
  position: relative;
  padding: 0.8em 0.7em;
  font-family: Courier, monospace;
  font-size: 1.3em;
  color: #d0d0d0;
  cursor: pointer;
  line-height: 1;
  background: transparent;
  border-radius: 0.77em;
  border: none;
  transition: transform 0.12s cubic-bezier(0.4, 0, 0.2, 1);

  transform-style: preserve-3d;
  isolation: isolate;
}

.glass-effect {
  position: absolute;
  inset: -0.45em;
  border-radius: 1rem;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.1),
    transparent 30%,
    transparent 80%,
    rgba(255, 255, 255, 0.05)
  );
  z-index: -3;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.5),
    inset 0 -1px 1px rgba(0, 0, 0, 0.3),
    0 0 20px 1px rgb(0 0 0 / 20%);
  transition: box-shadow 0.12s ease;
}

.cart-button::before {
  content: "";
  position: absolute;
  inset: -0.8em;
  background: radial-gradient(
      circle at top center,
      rgba(255, 225, 135, 0.5) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at top left,
      rgba(102, 245, 240, 0.5) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at top right,
      rgba(255, 134, 103, 0.5) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at bottom center,
      rgba(147, 112, 219, 0.5) 0%,
      transparent 80%
    );
  border-radius: inherit;
  filter: blur(0.3em);
  opacity: 0.8;
  z-index: -2;
  transition: all 0.12s ease;
}

.cart-button::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(#363636, #242424);
  border-radius: inherit;
  z-index: -1;
}

.button-text {
  position: relative;
  background: linear-gradient(#242424, #363636);
  padding: 0.85em 1.4em;
  border: none;
  border-radius: 999em;
  display: block;
  -webkit-user-select: none;
  user-select: none;
  z-index: 2;
  transition: all 0.12s ease;
}

/* Hover эффекты */
.cart-button:hover {
  transform: translateY(-2px);
}

.cart-button:hover .glass-effect {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.6),
    inset 0 -1px 1px rgba(0, 0, 0, 0.3),
    0 0 30px 2px rgb(0 0 0 / 30%);
}

.cart-button:hover::before {
  opacity: 1;
  filter: blur(0.4em);
  transform: scale(1.05);
}

.cart-button:hover .button-text {
  transform: scale(1.02);
}

.cart-button:hover::before {
  opacity: 1;
}

/* Active эффекты */
.cart-button:active {
  transform: translateY(3px) scale(0.95);
  transition: transform 0.08s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-button:active .glass-effect {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.3),
    inset 0 -1px 1px rgba(0, 0, 0, 0.2),
    0 0 15px 0 rgb(0 0 0 / 20%);
  opacity: 0.2;
  transition: all 0.3s ease;
}

.cart-button:active::before {
  opacity: 1;
  filter: blur(1em);
  transform: scale(1.1);
  inset: -0.45em;
  transition: all 0.08s ease;
}

.cart-button:active .button-text {
  transform: scale(0.92);
  background: linear-gradient(#1a1a1a, #2a2a2a);
  transition: all 0.08s ease;
}

/* Focus эффекты */
.cart-button:active {
  outline: none;
}
`}
      </style>
      <button className=" hover:text-red-700 cart-button w-[230px] md:w-[360px]">
        <div className="glass-effect"></div>

        <span className="button-text ">visit Github</span>
      </button>
    </div>
  );
};

export default GithubButton;
