
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

import com.vision.BuildConfig;
import com.vision.R;

// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/masked-view
import org.reactnative.maskedview.RNCMaskedViewPackage;
// react-native-custom-fonts
import io.github.cawfree.customfonts.RNCustomFontsPackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-i18n
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
// react-native-localize
import com.reactcommunity.rnlocalize.RNLocalizePackage;
// react-native-maps
import com.airbnb.android.react.maps.MapsPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-restart
import com.reactnativerestart.RestartPackage;
// react-native-safe-area-context
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
// react-native-screens
import com.swmansion.rnscreens.RNScreensPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  public PackageList(ReactNativeHost reactNativeHost) {
    this.reactNativeHost = reactNativeHost;
  }

  public PackageList(Application application) {
    this.reactNativeHost = null;
    this.application = application;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new AsyncStoragePackage(),
      new RNCMaskedViewPackage(),
      new RNCustomFontsPackage(),
      new RNGestureHandlerPackage(),
      new RNI18nPackage(),
      new RNLocalizePackage(),
      new MapsPackage(),
      new ReanimatedPackage(),
      new RestartPackage(),
      new SafeAreaContextPackage(),
      new RNScreensPackage(),
      new VectorIconsPackage()
    ));
  }
}
