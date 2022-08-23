import React from "react";
import "./List.scss";
import ListImg from "./ListImg";
import ListNav from "./ListNav";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ListContent from "./ListContent";
import { _postsList } from "../../redux/modules/postsSlice";

const List = ({nickname}) => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.posts.postsList);

  useEffect(() => {
    dispatch(_postsList(nickname));
  }, [dispatch]);

  if (!listData) {
    return "내용이없습니다.";
  }

  return (
    <>
      {listData.map((ListData) => {
        return (
          <div className="ListWarp" key={ListData.postId}>
            {/* 상단바 */}
            <ListNav ListData={ListData}/>
            {/* 이미지 */}
            <ListImg ListData={ListData}/>
            {/* 아래 컨텐츠 박스 */}
            <ListContent ListData={ListData}/>
          </div>
        );
      })}
    </>
  );
};

export default List;
