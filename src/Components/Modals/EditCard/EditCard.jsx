import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { parseISO } from 'date-fns';

//===for calendar===/
import { formattedDateForBtn } from '../../../services/formatingDate.js';
import Calendar from '../Calendar/Calendar.jsx';
import 'react-datepicker/dist/react-datepicker.css';
import '../Calendar/calendar.css';

//===for fetch===/
import { useUpdateTaskMutation } from '../../../redux/boardApi/boardApi.js';

//===components===/
import CloseButton from '../CloseButton/CloseButton.jsx';
import ButtonModal from '../ButtonModal/ButtonModal.jsx';
import { closeModal } from '../../../redux/modal/modalSlice';

//===styles===/
import {
  EditCardModal,
  Title,
  InputTitle,
  InputDescription,
  StyledPriority,
  StyledLabelDeadline,
  StyleErrorMessage,
  Span,
  LabelContainer,
  ButtonDate,
  CalendarContainer,
  LabelDiv,
  ChevronDown,
  BtnName,
} from './EditCard.styled.js';

const ModalEditCard = ({ componentName }) => {
  const {
    task: { title, description, priority, deadline, column, _id },
  } = componentName;

  const idTask = _id.toString();

  const [date, setDate] = useState(new Date(deadline));
  const [select, setSelect] = useState(priority);
  const [formattedDate, setFormattedDate] = useState('');

  const [updateTask] = useUpdateTaskMutation();

  const dispatch = useDispatch();

  const priorityValue = ['low', 'medium', 'high', 'without'];

  //===for change date on the modal===/
  useEffect(() => {
    setFormattedDate(formattedDateForBtn(date));
  }, [date]);

  const initialValues = {
    title: title,
    description: description,
    priority: priority,
    deadline: deadline,
    column: column,
  };

  const schema = yup.object({
    title: yup
      .string()
      .min(2, 'Too Short!')
      .max(30, 'Maximum 30 characters')
      .matches(
        /^[a-zA-Zа-яА-ЯёЁ][a-zA-Zа-яА-ЯёЁ0-9.%+\-_]*( [a-zA-Zа-яА-ЯёЁ0-9.%+\-_]+)*$/,
        'Invalid name format'
      )
      .required('title is required!'),
    description: yup.string().required('Description is required'),
    priority: yup
      .string()
      .required('Priority is required')
      .oneOf(['low', 'medium', 'high', 'without']),
    deadline: yup.date().required('Deadline is required'),
    column: yup.string().required(),
  });

  //===for props (need for the custom radio btn)===/
  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const handleSubmit = async (values) => {
    try {
      await updateTask({ values, idTask });
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCalendar = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <EditCardModal>
      <CloseButton onClick={() => dispatch(closeModal())} />
      <Title>Edit card</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        autoComplete="off"
      >
        {({ setFieldValue, values }) => (
          <Form>
            <InputTitle
              id="title"
              name="title"
              type="text"
              placeholder="Title"
            />
            <StyleErrorMessage name="title" component="div" />
            <InputDescription
              as="textarea"
              id="description"
              name="description"
              type="text"
              value={values.description}
              onChange={(event) =>
                setFieldValue('description', event.target.value)
              }
              placeholder="Description"
            />
            <StyleErrorMessage name="description" component="div" />
            <LabelDiv>
              <StyledPriority id="priority">Label color</StyledPriority>
              <LabelContainer role="group" aria-labelledby="my-radio-group">
                {priorityValue.map((value) => {
                  return (
                    <label htmlFor={value} key={value}>
                      <input
                        value={value}
                        type="radio"
                        id={value}
                        name="priority"
                        onChange={(event) => {
                          handleSelectChange(event);
                          setFieldValue('priority', event.target.value);
                        }}
                        checked={select === value}
                      />
                      <Span value={value} />
                    </label>
                  );
                })}
              </LabelContainer>
              <StyleErrorMessage name="priority" component="div" />
            </LabelDiv>
            <StyledLabelDeadline> Deadline</StyledLabelDeadline>
            <CalendarContainer>
              <ButtonDate type="button">
                <BtnName>
                  {formattedDate}
                  <ChevronDown />
                </BtnName>
              </ButtonDate>
              <Calendar
                prop={date}
                click={handleSubmitCalendar}
                setFieldValue={setFieldValue}
              />
              <StyleErrorMessage name="deadline" component="div" />
            </CalendarContainer>
            <ButtonModal buttonName={'Edit'} />
          </Form>
        )}
      </Formik>
    </EditCardModal>
  );
};

export default ModalEditCard;
