/** @type {import('tailwindcss').Config} */
module.exports = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "xs": "480px",
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1280px",
                        "2xl": "1538px"
                    },
                    "colors": {
                        "transparent": "transparent",
                        "current": "currentColor",
                        "black": "#000",
                        "white": "#fff",
                        "blue": {
                            "50": "#E9EBFA",
                            "100": "#D4D8F5",
                            "200": "#A9B0EC",
                            "300": "#7D89E2",
                            "400": "#5261D9",
                            "500": "#273ACF",
                            "600": "#1F2EA6",
                            "700": "#17237C",
                            "800": "#101753",
                            "900": "#080C29"
                        },
                        "purple": {
                            "50": "#EEEAFB",
                            "100": "#DDD4F7",
                            "200": "#BCA9EF",
                            "300": "#9A7FE6",
                            "400": "#7954DE",
                            "500": "#5729D6",
                            "600": "#4621AB",
                            "700": "#341980",
                            "800": "#231056",
                            "900": "#11082B"
                        },
                        "pink": {
                            "50": "#FFE6F4",
                            "100": "#FFCCE9",
                            "200": "#FF99D2",
                            "300": "#FF66BC",
                            "400": "#FF33A5",
                            "500": "#FF008F",
                            "600": "#CC0072",
                            "700": "#990056",
                            "800": "#660039",
                            "900": "#33001D"
                        },
                        "orange": {
                            "50": "#FFF5E6",
                            "100": "#FFEBCC",
                            "200": "#FFD699",
                            "300": "#FFC266",
                            "400": "#FFAD33",
                            "500": "#FF9900",
                            "600": "#CC7A00",
                            "700": "#995C00",
                            "800": "#663D00",
                            "900": "#331F00"
                        },
                        "green": {
                            "50": "#E9F8EA",
                            "100": "#D3F0D4",
                            "200": "#A7E1A9",
                            "300": "#7CD27E",
                            "400": "#50C353",
                            "500": "#24B428",
                            "600": "#1D9020",
                            "700": "#166C18",
                            "800": "#0E4810",
                            "900": "#072408"
                        },
                        "gray": {
                            "50": "#F0F0F2",
                            "100": "#E1E2E6",
                            "200": "#C3C5CD",
                            "300": "#A5A7B3",
                            "400": "#878A9A",
                            "500": "#696D81",
                            "600": "#545767",
                            "700": "#3F414D",
                            "800": "#2A2C34",
                            "900": "#15161A"
                        },
                        "darkPurple": {
                            "50": "#F3F1F6",
                            "100": "#E7E4ED",
                            "200": "#CFC8DB",
                            "300": "#B6ADC9",
                            "400": "#9E91B7",
                            "500": "#8676A5",
                            "600": "#6B5E84",
                            "700": "#504763",
                            "800": "#362F42",
                            "900": "#1B1821"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "18": "4.5rem",
                        "20": "5rem",
                        "24": "6rem",
                        "28": "7rem",
                        "32": "8rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "112": "28rem",
                        "128": "32rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "animation": {
                        "none": "none",
                        "spin": "spin 1s linear infinite",
                        "ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        "bounce": "bounce 1s infinite",
                        "movingLeft": "movingLeft 35s linear infinite",
                        "movingRight": "movingRight 35s linear infinite",
                        "pulseText": "pulseText 10s ease-in-out infinite",
                        "pulseTextDark": "pulseTextDark 10s ease-in-out infinite",
                        "pulseTextGreen": "pulseTextGreen 10s ease-in-out infinite",
                        "showLine": "showLine 5s linear infinite",
                        "searchInput": "showSearchInput 1s linear",
                        "fill": "animFill 500ms linear both"
                    },
                    "backgroundColor": theme => ({
      ...theme('colors'),
      body: '#fff',
    }),
                    "blur": {
                        "none": "0px",
                        "DEFAULT": "20px",
                        "sm": "4px",
                        "md": "16px",
                        "lg": "24px",
                        "xl": "28px",
                        "2xl": "40px",
                        "3xl": "64px"
                    },
                    "backdropBlur": (theme) => theme('blur'),
                    "filter": {
                        "DEFAULT": "",
                        "blur": "blur(var(--tw-blur))",
                        "none": "none"
                    },
                    "backdropBrightness": (theme) => theme('brightness'),
                    "backdropContrast": (theme) => theme('contrast'),
                    "backdropGrayscale": (theme) => theme('grayscale'),
                    "backdropHueRotate": (theme) => theme('hueRotate'),
                    "backdropInvert": (theme) => theme('invert'),
                    "backdropOpacity": (theme) => theme('opacity'),
                    "backdropSaturate": (theme) => theme('saturate'),
                    "backdropSepia": (theme) => theme('sepia'),
                    "backgroundImage": {
                        "none": "none",
                        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
                        "radial": "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-text": "linear-gradient(276deg, #CECECE 9.65%, #FFFFFF 94.36%)",
                        "gradient-white": "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(6,9,24,1) 100%)",
                        "gradient-white-bottom": "linear-gradient(0deg, #FFF 38.74%, rgba(255, 255, 255, 0.00) 137.07%)"
                    },
                    "backgroundOpacity": (theme) => theme('opacity'),
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "borderColor": (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
                    "borderOpacity": (theme) => theme('opacity'),
                    "borderRadius": {
                        "none": "0px",
                        "xs": "0.125rem",
                        "sm": "0.25rem",
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.625rem",
                        "2xl": "1rem",
                        "3xl": "1.25rem",
                        "4xl": "1.875rem",
                        "5xl": "2.5rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0px",
                        "2": "2px",
                        "3": "3px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "sm": "0px 1px 2px 0px rgba(85, 105, 135, 0.10)",
                        "DEFAULT": "0px 2px 4px -2px rgba(85, 105, 135, 0.02), 0px 6px 10px -2px rgba(85, 105, 135, 0.04);",
                        "md": "0px 4px 6px -2px rgba(85, 105, 135, 0.02), 0px 12px 16px -4px rgba(85, 105, 135, 0.04)",
                        "lg": "0px 8px 8px -4px rgba(85, 105, 135, 0.02), 0px 20px 24px -4px rgba(85, 105, 135, 0.04)",
                        "xl": "0px 24px 48px -12px rgba(85, 105, 135, 0.06)",
                        "2xl": "0px 32px 64px -12px rgba(85, 105, 135, 0.08)",
                        "none": "none"
                    },
                    "container": [],
                    "cursor": {
                        "auto": "auto",
                        "default": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "help": "help",
                        "not-allowed": "not-allowed"
                    },
                    "divideColor": (theme) => theme('borderColor'),
                    "divideOpacity": (theme) => theme('borderOpacity'),
                    "divideWidth": (theme) => theme('borderWidth'),
                    "fill": {
                        "current": "currentColor"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "heading": [
                            "Poppins",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "body": [
                            "Poppins",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "sans": [
                            "Poppins",
                            "ui-sans-serif",
                            "system-ui",
                            "-apple-system",
                            "BlinkMacSystemFont",
                            "\"Segoe UI\"",
                            "Roboto",
                            "\"Helvetica Neue\"",
                            "Arial",
                            "\"Noto Sans\"",
                            "sans-serif",
                            "\"Apple Color Emoji\"",
                            "\"Segoe UI Emoji\"",
                            "\"Segoe UI Symbol\"",
                            "\"Noto Color Emoji\""
                        ],
                        "serif": [
                            "ui-serif",
                            "Georgia",
                            "Cambria",
                            "\"Times New Roman\"",
                            "Times",
                            "serif"
                        ],
                        "mono": [
                            "ui-monospace",
                            "SFMono-Regular",
                            "Menlo",
                            "Monaco",
                            "Consolas",
                            "\"Liberation Mono\"",
                            "\"Courier New\"",
                            "monospace"
                        ]
                    },
                    "fontSize": {
                        "sm": [
                            "0.875rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "base": [
                            "1rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "lg": [
                            "1.125rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "xl": [
                            "1.25rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "2xl": [
                            "1.5rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "3xl": [
                            "2rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "4xl": [
                            "3rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "5xl": [
                            "4rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "6xl": [
                            "5rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "7xl": [
                            "6rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "8xl": [
                            "10rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ],
                        "9xl": [
                            "17.5rem",
                            {
                                "lineHeight": "1.3"
                            }
                        ]
                    },
                    "fontWeight": {
                        "thin": "100",
                        "extralight": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800"
                    },
                    "gap": (theme) => theme('spacing'),
                    "gradientColorStops": (theme) => theme('colors'),
                    "gridAutoColumns": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridAutoRows": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridColumn": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-7": "span 7 \/ span 7",
                        "span-8": "span 8 \/ span 8",
                        "span-9": "span 9 \/ span 9",
                        "span-10": "span 10 \/ span 10",
                        "span-11": "span 11 \/ span 11",
                        "span-12": "span 12 \/ span 12",
                        "span-full": "1 \/ -1"
                    },
                    "gridColumnEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridColumnStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridRow": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-full": "1 \/ -1"
                    },
                    "gridRowStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridRowEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridTemplateColumns": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "7": "repeat(7, minmax(0, 1fr))",
                        "8": "repeat(8, minmax(0, 1fr))",
                        "9": "repeat(9, minmax(0, 1fr))",
                        "10": "repeat(10, minmax(0, 1fr))",
                        "11": "repeat(11, minmax(0, 1fr))",
                        "12": "repeat(12, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "gridTemplateRows": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "height": (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
    }),
                    "inset": (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
                    "keyframes": {
                        "spin": {
                            "to": {
                                "transform": "rotate(360deg)"
                            }
                        },
                        "ping": {
                            "75%, 100%": {
                                "transform": "scale(2)",
                                "opacity": "0"
                            }
                        },
                        "pulse": {
                            "50%": {
                                "opacity": ".5"
                            }
                        },
                        "bounce": {
                            "0%, 100%": {
                                "transform": "translateY(-25%)",
                                "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
                            },
                            "50%": {
                                "transform": "none",
                                "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
                            }
                        },
                        "movingLeft": {
                            "0%": {
                                "transform": "translateX(0px)"
                            },
                            "50%": {
                                "transform": "translateX(-700px)"
                            },
                            "100%": {
                                "transform": "translateX(0px)"
                            }
                        },
                        "movingRight": {
                            "0%": {
                                "transform": "translateX(0px)"
                            },
                            "50%": {
                                "transform": "translateX(700px)"
                            },
                            "100%": {
                                "transform": "translateX(0px)"
                            }
                        },
                        "pulseText": {
                            "0%": {
                                "color": "#041109"
                            },
                            "25%": {
                                "color": "#E3E8E5"
                            },
                            "70%": {
                                "color": "#E3E8E5"
                            },
                            "100%": {
                                "color": "#041109"
                            }
                        },
                        "pulseTextDark": {
                            "0%": {
                                "color": "#19251D"
                            },
                            "25%": {
                                "color": "#FFF"
                            },
                            "70%": {
                                "color": "#FFF"
                            },
                            "100%": {
                                "color": "#19251D"
                            }
                        },
                        "pulseTextGreen": {
                            "0%": {
                                "color": "#2B4F36"
                            },
                            "25%": {
                                "color": "#FFF"
                            },
                            "70%": {
                                "color": "#FFF"
                            },
                            "100%": {
                                "color": "#2B4F36"
                            }
                        },
                        "showLine": {
                            "0%": {
                                "width": "200px"
                            },
                            "25%": {
                                "width": "600px"
                            },
                            "50%": {
                                "width": "600px"
                            },
                            "100%": {
                                "width": "200px"
                            }
                        },
                        "showSearchInput": {
                            "0%": {
                                "width": "0px"
                            },
                            "100%": {
                                "width": "180px"
                            }
                        },
                        "animFill": {
                            "0%": {
                                "width": "0px"
                            },
                            "100%": {
                                "width": "100%"
                            }
                        }
                    },
                    "letterSpacing": {
                        "tighter": "-0.05em",
                        "tight": "-0.025em",
                        "normal": "0em",
                        "wide": "0.025em",
                        "wider": "0.05em",
                        "widest": "0.1em",
                        "xs": "-0.5px"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.25",
                        "snug": "1.375",
                        "normal": "1.5",
                        "relaxed": "1.625",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "margin": (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
                    "maxHeight": (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
                    "maxWidth": (theme, { breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '50rem',
      '5xl': '56rem',
      '6xl': '63rem',
      '7xl': '72rem',
      '8xl': '76rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
                    "minHeight": {
                        "0": "0px",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0px",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "outline": {
                        "none": [
                            "2px solid transparent",
                            "2px"
                        ],
                        "white": [
                            "2px dotted white",
                            "2px"
                        ],
                        "black": [
                            "2px dotted black",
                            "2px"
                        ]
                    },
                    "padding": (theme) => theme('spacing'),
                    "placeholderColor": (theme) => theme('colors'),
                    "placeholderOpacity": (theme) => theme('opacity'),
                    "ringColor": (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
                    "ringOffsetColor": (theme) => theme('colors'),
                    "ringOffsetWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px"
                    },
                    "ringOpacity": (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
                    "ringWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "3px"
                    },
                    "rotate": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "45": "45deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-45": "-45deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "scale": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5"
                    },
                    "skew": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "space": (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
                    "stroke": {
                        "current": "currentColor"
                    },
                    "strokeWidth": [
                        "0",
                        "1",
                        "2"
                    ],
                    "textColor": theme => ({
      ...theme('colors'),
      body: '#060918',
    }),
                    "textOpacity": (theme) => theme('opacity'),
                    "transformOrigin": {
                        "center": "center",
                        "top": "top",
                        "top-right": "top right",
                        "right": "right",
                        "bottom-right": "bottom right",
                        "bottom": "bottom",
                        "bottom-left": "bottom left",
                        "left": "left",
                        "top-left": "top left"
                    },
                    "transitionDelay": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms"
                    },
                    "transitionDuration": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms",
                        "DEFAULT": "150ms"
                    },
                    "transitionProperty": {
                        "none": "none",
                        "all": "all",
                        "DEFAULT": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        "colors": "background-color, border-color, color, fill, stroke",
                        "opacity": "opacity",
                        "shadow": "box-shadow",
                        "transform": "transform"
                    },
                    "transitionTimingFunction": {
                        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "linear": "linear",
                        "in": "cubic-bezier(0.4, 0, 1, 1)",
                        "out": "cubic-bezier(0, 0, 0.2, 1)",
                        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "translate": (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
    }),
                    "width": (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
    }),
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "theme": {
        "extend": []
    },
    "content": [
        "./resources/**/*.{html,js,css}",
    ]
};