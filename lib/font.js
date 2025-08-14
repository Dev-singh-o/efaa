import { Hanken_Grotesk, DM_Sans } from 'next/font/google'

export const HankenGrotesk = Hanken_Grotesk({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--title-font",
    display: 'swap',
})
export const DMSans = DM_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--text-font",
    display: 'swap',
})
