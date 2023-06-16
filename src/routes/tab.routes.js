import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Tela1 from "../pages/Tela1";
import Tela2 from "../pages/Tela2";
import Tela3 from "../pages/Tela3";
import Tela4 from "../pages/Tela4";
import Tela5 from "../pages/Tela5";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tela1"
        component={Tela1}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "África",
          tabBarStyle:{paddingBottom:5},
        }}
      />
      <Tab.Screen
        name="Tela2"
        component={Tela2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Américas",
        }}
      />
      <Tab.Screen
        name="Tela3"
        component={Tela3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Ásia",
        }}
      />
      <Tab.Screen
        name="Tela4"
        component={Tela4}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Europa",
        }}
      />
      <Tab.Screen
        name="Tela5"
        component={Tela5}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          tabBarLabel: "Oceania",
        }}
      />
    </Tab.Navigator>
  );
}
