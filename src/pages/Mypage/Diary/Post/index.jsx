import * as S from './index.styles';
import List from './List';
import Pagination from './Pagination';

const Post = ({ list, totalPage, mood, page, setParams }) => {
  const hasTotalPage = totalPage > 0;
  return (
    <S.Container>
      <List list={list} />
      {hasTotalPage && (
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
