import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Divider, List } from "antd";

import { actions, categorySelectors } from "store/categorySlice";
import { AppDispatch } from "../../store/store";

import { CardItem } from "../Card";
import { Loader } from "../Loader";
import { ErrorToast } from "components/ErrorToast";
import {isLoadedSeleсtor} from "../../store/categorySlice/selectors";
import {ContainerWithCards} from "../ContainerWithCards";

export const CategoryPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { idCategory } = useParams() as { idCategory: string };

  const category = useSelector(categorySelectors.getTransformCategory);
  const loading = useSelector(categorySelectors.isLoadingSeleсtor);
  const error = useSelector(categorySelectors.isErrorSeleсtor);
  const loaded = useSelector(categorySelectors.isLoadedSeleсtor);

  useEffect(() => {
    dispatch(actions.fetchCategory(idCategory));
  }, [idCategory]);

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorToast />}

      {loaded && <ContainerWithCards category={{
        label: category[0].categoryLabel,
        id: category[0].categoryTypeId!,
        type: ''
      }} items={category}/>
      }
    </>
  );
};
