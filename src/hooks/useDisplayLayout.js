import { useAtom } from 'jotai';
import { displayLayoutAtom } from '@/store/diary';

const useDisplayLayout = () => {
  const [display, setDisplay] = useAtom(displayLayoutAtom);

  return [display, setDisplay];
};

export default useDisplayLayout;
