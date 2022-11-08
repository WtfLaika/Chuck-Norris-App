import answerSlice, {answerInitialState, setCategories, setLogo, setPhrase} from './answerSlice';
import mainSlice, {mainInitialState, setLoading} from './mainSlice';
import memeSlice, {memeInitialState, setMeme} from './memeSlice';

describe('test answer reducer', () => {
  test('test setPhrase', () => {
    const joke = 'Hahahah good joke hahahaha';
    expect(answerSlice(answerInitialState, setPhrase(joke))).toEqual({...answerInitialState, phrase: joke});
  });
  test('test setLogo ', () => {
    const logo =
      'https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr';
    expect(answerSlice(answerInitialState, setLogo(logo))).toEqual({...answerInitialState, logo});
  });
  test('test setCategories ', () => {
    const categories = ['animal,career,celebrity'];
    ('https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr');
    expect(answerSlice(answerInitialState, setCategories(categories))).toEqual({
      ...answerInitialState,
      categories: [...categories, 'random'],
    });
  });
});

test('test main reducer', () => {
  const loading = true;
  expect(mainSlice(mainInitialState, setLoading(loading))).toEqual({...mainInitialState, loading});
});

test('test meme reducer', () => {
  const meme = 'https://i.imgur.com/gwy9G6s.jpg';
  expect(memeSlice(memeInitialState, setMeme(meme))).toEqual({...memeInitialState, meme});
});
