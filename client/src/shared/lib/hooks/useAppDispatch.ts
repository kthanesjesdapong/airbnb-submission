import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@shared/lib/test-utils';

export const useAppDispatch: () => AppDispatch = useDispatch;
