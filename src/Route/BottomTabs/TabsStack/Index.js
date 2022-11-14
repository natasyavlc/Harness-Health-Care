import React from 'react';
import {
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import Profile from '../../../Screen/Profile/Index'
import Settings from '../../../Screen/Profile/Settings';
import Notification from '../../../Screen/Profile/Notifications';
import Edit_Password from '../../../Screen/Profile/Form_edit_pass';
const Stack = createStackNavigator();
const ProfileStack = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />

                <Stack.Screen
                    name="Setting"
                    component={Settings}
                />
                <Stack.Screen
                    name="Notifications"
                    component={Notification}
                />
                <Stack.Screen
                    name="EditPassword"
                    component={Edit_Password}
                />
            </Stack.Navigator>
        </>
    )
}

export default ProfileStack;