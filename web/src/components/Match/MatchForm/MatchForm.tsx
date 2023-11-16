import type { EditMatchById, UpdateMatchInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormMatch = NonNullable<EditMatchById['match']>

interface MatchFormProps {
  match?: EditMatchById['match']
  onSave: (data: UpdateMatchInput, id?: FormMatch['id']) => void
  error: RWGqlError
  loading: boolean
}

const MatchForm = (props: MatchFormProps) => {
  const onSubmit = (data: FormMatch) => {
    props.onSave(data, props?.match?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormMatch> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="sex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sex
        </Label>

        <TextField
          name="sex"
          defaultValue={props.match?.sex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sex" className="rw-field-error" />

        <Label
          name="championshipId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Championship id
        </Label>

        <NumberField
          name="championshipId"
          defaultValue={props.match?.championshipId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="championshipId" className="rw-field-error" />

        <Label
          name="oakId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Oak id
        </Label>

        <NumberField
          name="oakId"
          defaultValue={props.match?.oakId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="oakId" className="rw-field-error" />

        <Label
          name="oakScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Oak score
        </Label>

        <NumberField
          name="oakScore"
          defaultValue={props.match?.oakScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="oakScore" className="rw-field-error" />

        <Label
          name="willowId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Willow id
        </Label>

        <NumberField
          name="willowId"
          defaultValue={props.match?.willowId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="willowId" className="rw-field-error" />

        <Label
          name="willowScore"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Willow score
        </Label>

        <NumberField
          name="willowScore"
          defaultValue={props.match?.willowScore}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="willowScore" className="rw-field-error" />

        <Label
          name="nextMatchId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Next match id
        </Label>

        <NumberField
          name="nextMatchId"
          defaultValue={props.match?.nextMatchId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="nextMatchId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MatchForm
