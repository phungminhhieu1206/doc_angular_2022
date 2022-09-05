// Một loạt các FilterButton được tạo sẽ dựa trên mẫu có sẵn này, không thay đổi !

export interface FilterButton {
  type: Filter;
  label: string;
  isActive: boolean;
}

export enum Filter {
  All,
  Activate,
  Completed,
}
