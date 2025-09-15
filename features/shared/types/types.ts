interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  delay?: number; // debounce delay in ms
}

export type { SearchInputProps };
