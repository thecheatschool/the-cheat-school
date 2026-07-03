import React from 'react';

const ErrorDisplay = ({
  heading = "Something went wrong",
  message = "An unexpected error occurred. Please try again.",
  link = null,
  linkText = "Learn more",
  onClose = null,
  className = ""
}) => {
  return (
    <div className={`w-80 h-fit bg-card relative flex items-center justify-center transition-all duration-300 group ${className}`}>
      <style>
        {`
          .error-card::before {
            content: "";
            background-color: var(--primary);
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: -1;
            padding: 4px;
            transition: all 0.3s;
          }
          .error-card:hover::before {
            margin: 25px 0 0 25px;
          }
        `}
      </style>
      <div className="error-card w-full h-full">
        <div className="w-full flex flex-col p-4 gap-1">
          <p className="text-base font-extrabold font-primary text-foreground">{heading}</p>
          <p className="text-[0.95em] font-medium font-secondary text-muted-foreground">{message}</p>
          {link &&
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold font-secondary mt-1 hover:underline">
            
              {linkText}
            </a>
          }
          {onClose &&
          <button
            onClick={onClose}
            className="absolute w-7 h-7 flex items-center justify-center bg-transparent border-none right-2 top-2 cursor-pointer hover:bg-accent transition-colors rounded">
            
              <svg fill="none" viewBox="0 0 15 15" height="12" width="12">
                <path
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                className="text-foreground"
                d="M1 14L14 1">
              </path>
                <path
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                className="text-foreground"
                d="M1 1L14 14">
              </path>
              </svg>
            </button>
          }
        </div>
      </div>
    </div>);

};

export default ErrorDisplay;