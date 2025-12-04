import { cva } from 'class-variance-authority';

export const dropdownVariants = cva(
    'absolute left-0 top-full w-72 bg-white rounded-xl shadow-xl border border-border py-3 transition-all duration-200 origin-top-left',
    {
        variants: {
            state: {
                open: 'opacity-100 scale-100 visible',
                closed: 'opacity-0 scale-95 invisible',
            },
        },
        defaultVariants: {
            state: 'closed',
        },
    }
);

export const mobileMenuVariants = cva(
    'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
    {
        variants: {
            state: {
                open: 'max-h-screen opacity-100',
                closed: 'max-h-0 opacity-0',
            },
        },
        defaultVariants: {
            state: 'closed',
        },
    }
);

export const servicesButtonVariants = cva(
    'flex items-center text-text-secondary hover:text-primary font-medium transition-colors py-2',
    {
        variants: {
            open: {
                true: '',
                false: '',
            },
        },
    }
);

export const chevronVariants = cva(
    'ml-1 h-4 w-4 transition-transform duration-200',
    {
        variants: {
            rotated: {
                true: 'rotate-180',
                false: '',
            },
        },
        defaultVariants: {
            rotated: false,
        },
    }
);