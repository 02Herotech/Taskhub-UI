// @/lib/utils/classNames.ts
export function cn(...classNames: (string | undefined | null | false)[]): string {
    return classNames.filter(Boolean).join(' ');
}
