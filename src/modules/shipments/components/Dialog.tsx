import React, { Dispatch, SetStateAction } from 'react'
import { Paragraph, Dialog, Portal } from 'react-native-paper'

import Styles from '../../../common/Styles'
import { Text, View } from '../../../common/Themed'
import Button from '../../../common/components/Button'

export const SuccessDialog = ({
  success,
}: {
  success: boolean
}): JSX.Element | null => {
  return success ? (
    <View style={Styles.successContainer}>
      <Text style={Styles.success}>Shipment created successfully!</Text>
    </View>
  ) : null
}

interface ErrorDialogProps {
  error: string
  showError: boolean
  setShowError: Dispatch<SetStateAction<boolean>>
}

export const ErrorDialog = ({
  error,
  showError,
  setShowError,
}: ErrorDialogProps): JSX.Element => {
  const hideDialog = () => setShowError(false)

  return (
    <View>
      <Portal>
        <Dialog
          visible={showError}
          onDismiss={hideDialog}
          style={{ alignSelf: 'center' }}
        >
          <Dialog.Content>
            <Paragraph>{error}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              text="ok"
              onPress={hideDialog}
              accessibilityLabel="Hide dialog"
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  )
}
