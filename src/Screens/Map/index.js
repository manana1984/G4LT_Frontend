import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { useLayoutEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { connectGeneralStatesToProps } from '../../Redux/connects';

const MapScreen = ({ navigation, setLocation }) => {
  const [locationName, setLocationName] = useState("");

  navigation.setOptions({
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: " ",
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Text style={styles.headleft}>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => {
        setLocation(locationName);
        navigation.goBack();
      }}>
        <Text style={styles.headright}>Done</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: "white",
      borderBottomColor: "black",
    }

  });

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude || 0);
      setLongitude(info.coords.longitude || 0);
    });
  }, []);

  const press = (value) => {
    setLatitude(value.nativeEvent.coordinate.latitude);
    setLongitude(value.nativeEvent.coordinate.longitude);
  }

  const PoiPress = (value) => {
    setLatitude(value.nativeEvent.coordinate.latitude);
    setLongitude(value.nativeEvent.coordinate.longitude);
    setLocationName(value.nativeEvent.name);
  }

  return (

    <View style={styles.container}>
      <View style={styles.location}>
        <Text placeholder="Current Location" style={[styles.input, styles.text]}  >
          {locationName}
        </Text>
        <Ionicons name='location' size={29} color='#800080' style={{ marginLeft: -28, marginTop: 15 }} />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        // region={{ latitude, longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
        onPoiClick={PoiPress}
        onPress={press}
      >
        <MapView.Marker
          coordinate={{ latitude, longitude }}
          title="My Position"
          draggable
        />
      </MapView>
    </View>
  );
};

export default connectGeneralStatesToProps(MapScreen);
