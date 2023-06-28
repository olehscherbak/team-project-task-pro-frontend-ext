import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// import { useUpdateTaskMutation } from '../../../redux/tasksApi/tasksApi.js';
import { useUpdateTaskMutation } from '../../../redux/boardApi/boardApi';
import { closeModal } from '../../../redux/modal/modalSlice';

import url from '../../../images/icons/sprite/icons.svg';

import {
  ProgressDoneContainer,
  ColumnName,
  ColumnMoveTo,
} from './ProgressDone.styled';

const ProgressDoneModal = ({ componentName }) => {
  const [updateTask] = useUpdateTaskMutation();
  const dispatch = useDispatch();

  const currentColumnId = componentName.currentColumnId;
  const currentTaskId = componentName.currentTaskId;
  const allColumns = componentName.columns;

  const handleClick = async (columnIdMoveTo) => {
    if (columnIdMoveTo === currentColumnId) return;
    const value = { column: columnIdMoveTo };
    try {
      await updateTask([value, currentTaskId]);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProgressDoneContainer>
      {allColumns.map(({ _id, title }) => (
        <ColumnMoveTo key={_id} onClick={() => handleClick(_id)}>
          {_id !== currentColumnId && <ColumnName>{title}</ColumnName>}
          {_id === currentColumnId && (
            <ColumnName
              style={{ color: 'var(--accentColor)', cursor: 'default' }}
            >
              {title}
            </ColumnName>
          )}
          {_id !== currentColumnId && (
            <svg width={16} height={16}>
              <use xlinkHref={`${url}#icon-arrow-circle-broken-right`} />
            </svg>
          )}
        </ColumnMoveTo>
      ))}
    </ProgressDoneContainer>
  );
};

export default ProgressDoneModal;

ProgressDoneModal.propTypes = {
  componentName: PropTypes.shape({
    currentColumnId: PropTypes.string.isRequired,
    currentTaskId: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        board: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
};
