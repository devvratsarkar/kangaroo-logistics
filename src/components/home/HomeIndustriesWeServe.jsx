import { industriesWeServe } from '../../data/industriesWeServe.js'

function IndustryIcon({ type, className = 'size-7' }) {
  const props = {
    viewBox: '0 0 24 24',
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    'aria-hidden': true,
  }

  switch (type) {
    case 'cart':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
      )
    case 'factory':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 21V9.75L9 6.75v3L13.5 6.75v3L18 6.75V21M9 21v-4.5h6V21M9 12.75h.008v.008H9V12.75Zm3 0h.008v.008H12V12.75Z" />
        </svg>
      )
    case 'food':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M12 8.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15 12.75v3.75m-6-3.75v3.75m0 0v3.75c0 .621.504 1.125 1.125 1.125h3.75c.621 0 1.125-.504 1.125-1.125v-3.75M9 12.75h6" />
        </svg>
      )
    case 'construction':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21M8.59 12.34 3.75 7.5l4.95-4.95a1.5 1.5 0 0 1 2.12 0l2.83 2.83a1.5 1.5 0 0 1 0 2.12L8.59 12.34Zm0 0 2.83 2.83m2.83-2.83-2.83-2.83m2.83 2.83 2.12 2.12" />
        </svg>
      )
    case 'automotive':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375c-.621 0-1.125-.504-1.125-1.125V11.25c0-1.036.84-1.875 1.875-1.875h.375m10.5 9.375H20.25c.621 0 1.125-.504 1.125-1.125V11.25c0-1.036-.84-1.875-1.875-1.875h-.375M8.25 9.75V6.108c0-1.135.845-2.098 1.976-2.192A48.424 48.424 0 0 1 12 3.75c.698 0 1.383.062 2.024.166 1.131.094 1.976 1.057 1.976 2.192V9.75M8.25 9.75h7.5" />
        </svg>
      )
    case 'agriculture':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 0c-2.25 0-4.5 1.125-4.5 4.5V12m4.5-6.75c2.25 0 4.5 1.125 4.5 4.5V12M8.25 12H5.25A2.25 2.25 0 0 0 3 14.25v2.25A2.25 2.25 0 0 0 5.25 18.75h13.5A2.25 2.25 0 0 0 21 16.5V14.25A2.25 2.25 0 0 0 18.75 12H15.75M12 12v6.75" />
        </svg>
      )
    case 'package':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    case 'medical':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
      )
    case 'chemical':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.106 4.553a2.25 2.25 0 0 1-2.043 1.347H8.349a2.25 2.25 0 0 1-2.043-1.347L4.2 14.5m15.6 0H4.2" />
        </svg>
      )
    case 'energy':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      )
    case 'paper':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v9a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V9a2.25 2.25 0 0 0-2.25-2.25m-12 0V9a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 9V6.878" />
        </svg>
      )
    case 'furniture':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Z" />
        </svg>
      )
  }
}

export default function HomeIndustriesWeServe() {
  return (
    <section className="relative bg-white py-14 text-primary sm:py-16 lg:py-20">
      <div className="custom_container">
        <h2 className="text-center font-display text-[28px] leading-[1.15] font-bold uppercase tracking-[0.04em] text-primary sm:text-[36px] lg:text-[44px]">
          Industries We Serve
        </h2>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {industriesWeServe.map((industry) => (
            <li
              key={industry.id}
              className="industry-card rounded-[18px] border border-primary/10 bg-white p-6 shadow-[0_8px_30px_rgba(13,27,61,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-7"
            >
              <div className="industry-card-icon flex size-14 items-center justify-center rounded-full border border-dashed border-secondary bg-secondary/15 text-primary transition-all duration-300 ease-out">
                <IndustryIcon type={industry.icon} className="size-7" />
              </div>

              <h3 className="industry-card-title mt-5 font-display text-[20px] leading-tight font-semibold text-primary transition-colors duration-300 sm:text-[22px]">
                {industry.title}
              </h3>

              <p className="industry-card-copy mt-3 text-[15px] leading-7 text-muted transition-colors duration-300 sm:text-[16px]">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
