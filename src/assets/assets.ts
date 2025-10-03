export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  error = "error",
  warning = "warning",
}
type ButtonDictionary = {
  [key in ButtonType]: string;
};

export const buttonStyle: ButtonDictionary = {
  primary:
    "px-4 py-0.5! sm:px-5 text-lg text-primary-400 bg-gradient-to-tr from-primary-800/60 from-50% to-surface-950/60 hover:text-primary-300",
  secondary:
    "px-3 sm:px4 text-surface-300 bg-gradient-to-t from-surface-700/50 to-surface-95/50 hover:text-surface-50",
  success:
    "px-2 bg-gradient-to-r from-green-400/70 to-green-600/70 hover:from-green-500/50 hover:to-green-700/50 text-white font-semibold border border-white/70",
  error:
    "px-2 bg-gradient-to-r from-red-500/70 to-red-700/70 hover:from-red-600/50 hover:to-red-800/50 text-white font-semibold border border-white/70",
  warning:
    "px-2 bg-gradient-to-r from-yellow-400/70 to-yellow-600/70 hover:from-yellow-500/50 hover:to-yellow-700/50 text-white font-semibold border border-white/20",
};
