import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { useMoveTaskMutation } from '../../redux/boardApi/boardApi';

import { openModal } from '../../redux/modal/modalSlice';
import {
  useGetFetchBoardByIdQuery,
  useDeleteColumnMutation,
} from '../../redux/boardApi/boardApi';
import TaskCard from '../../Components/TaskCard/TaskCard';
import { selectFilterValue } from '../../redux/filter/filterSelector';
import {
  BoxColumns,
  BoxColumnsTitle,
  Subject,
  AddCardBtn,
  IconStyled,
  BtnIcon,
  ListTask,
  AddCardIcon,
  Container,
  ColumnContainer,
} from './ScreenPage.styled';
import url from '../../images/icons/sprite/icons.svg';
import { LoaderForDeleted } from '../../Components/Loader/LoaderDeleted/LoaderDeleted';

const ScreenPage = () => {
  const [isDeletedLoad, setIsDeletedLoad] = useState({});
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const { data } = useGetFetchBoardByIdQuery(boardId);
  const [deleteColumn] = useDeleteColumnMutation();
  const [value, setValue] = useState();
  const [filteredTasks, setFilteredTasks] = useState();
  const filter = useSelector(selectFilterValue);
  const [moveTask] = useMoveTaskMutation();

  useEffect(() => {
    if (data) {
      setValue(data.tasks);
      setFilteredTasks(data.tasks);
    }
  }, [data]);

  useEffect(() => {
    if (filter && data) {
      handleFilteredPriority();
    }
  }, [filter]);

  const handleClickModal = (columnId) => {
    dispatch(
      openModal({
        name: 'modalAddCard',
        boardId,
        columnId,
      })
    );
  };

  const handleEditColumn = (id, title) => {
    dispatch(
      openModal({
        name: 'editColumn',
        id,
        title,
      })
    );
  };

  const handleDeleteColumn = async (id) => {
    setIsDeletedLoad((prevIsDeletedLoad) => ({
      ...prevIsDeletedLoad,
      [id]: true,
    }));
    try {
      await deleteColumn(id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeletedLoad((prevIsDeletedLoad) => ({
        ...prevIsDeletedLoad,
        [id]: false,
      }));
    }
  };

  const handleFilteredPriority = () => {
    if (filter !== 'all') {
      setFilteredTasks(value?.filter((task) => task.priority === filter));
    } else setFilteredTasks(value);
  };

  const getColumnInfo = (id) => {
    const currentColumn = data.columns.find((col) => col._id === id);
    return currentColumn;
  };

  const getTaskInfo = (id) => {
    const task = filteredTasks.find((task) => task._id === id);
    return task;
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const value = {
      columnStart: source.droppableId,
      columnFinish: destination.droppableId,
      indexFinish: destination.index,
    };

    try {
      await moveTask({ values: value, idTask: draggableId });
    } catch (error) {
      console.log(error);
    }
  };

  // const scrinPageId = 'all-columns';

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="my_columns" direction="horizontal" type="column">
        {(provided) => (
          <Container
            id="my_columns"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data?.columns &&
              data.columnsIds.map((_id, index) => (
                <BoxColumns key={_id}>
                  <Draggable draggableId={_id} index={index}>
                    {(provided) => (
                      <ColumnContainer
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <BoxColumnsTitle {...provided.dragHandleProps}>
                          <Subject>{getColumnInfo(_id).title}</Subject>
                          <BtnIcon
                            onClick={() =>
                              handleEditColumn(_id, getColumnInfo(_id).title)
                            }
                            type="button"
                          >
                            <IconStyled width="16" height="16">
                              <use xlinkHref={`${url}#icon-pencil-01`} />
                            </IconStyled>
                          </BtnIcon>
                          <BtnIcon
                            onClick={() => handleDeleteColumn(_id)}
                            type="button"
                            disabled={isDeletedLoad[_id]}
                          >
                            {isDeletedLoad[_id] ? (
                              <LoaderForDeleted />
                            ) : (
                              <IconStyled width="16" height="16">
                                <use xlinkHref={`${url}#icon-trash-04`} />
                              </IconStyled>
                            )}
                          </BtnIcon>
                        </BoxColumnsTitle>

                        <Droppable droppableId={_id} type="task">
                          {(provided) => (
                            <ListTask
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {filteredTasks &&
                                // filteredTasks.map(
                                getColumnInfo(_id).tasksIds.map(
                                  (taskId, index) =>
                                    getTaskInfo(taskId) && (
                                      <TaskCard
                                        task={getTaskInfo(taskId)}
                                        columns={data.columns}
                                        key={getTaskInfo(taskId)._id}
                                        index={index}
                                      />
                                    )
                                )}
                              {provided.placeholder}
                            </ListTask>
                          )}
                        </Droppable>

                        <AddCardBtn onClick={() => handleClickModal(_id)}>
                          <AddCardIcon width="28" height="28">
                            <svg width="18" height="18">
                              <use xlinkHref={`${url}#icon-plus`} />
                            </svg>
                          </AddCardIcon>
                          Add another card
                        </AddCardBtn>
                      </ColumnContainer>
                    )}
                  </Draggable>
                </BoxColumns>
              ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ScreenPage;
