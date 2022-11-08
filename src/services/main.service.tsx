import axios from 'axios';
import {store} from '../App';
import {setLoading} from '../redux/mainSlice';

class MainService {
  async requestGetData(url: string, action: any, resKey: string): Promise<void> {
    try {
      store.dispatch(setLoading(true));
      await axios(url).then(async (response: any) => {
        let myRes = await response.data[resKey];
        if (resKey === '') myRes = response.data;
        return store.dispatch(action(myRes));
      });
    } catch (e) {
      console.log(e);
    } finally {
      store.dispatch(setLoading(false));
    }
  }
}

export default new MainService();
