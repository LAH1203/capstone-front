import * as S from './index.styles';
import List from './List';
import Pagination from './Pagination';

const Post = ({ list, totalPage, mood, page, setParams }) => {
  return (
    <S.Container>
      <List list={list} />
      {totalPage && (
        <Pagination
          totalPage={totalPage}
          mood={mood}
          page={page}
          setParams={setParams}
        />
      )}
    </S.Container>
  );
};

export default Post;
