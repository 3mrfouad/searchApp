import './App.css'

import React, { useEffect, useState } from 'react'

import Alert from './components/Alert'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'

const data = [
  {
    id: 1,
    first_name: 'Amii',
    last_name: 'Pettingall',
    email: 'apettingall0@eepurl.com'
  },
  {
    id: 2,
    first_name: 'Sargent',
    last_name: 'Ninnotti',
    email: 'sninnotti1@altervista.org'
  },
  {
    id: 3,
    first_name: 'Shanie',
    last_name: 'Philbrook',
    email: 'sphilbrook2@qq.com'
  },
  {
    id: 4,
    first_name: 'Mylo',
    last_name: 'Koche',
    email: 'mkoche3@e-recht24.de'
  },
  {
    id: 5,
    first_name: 'Kenon',
    last_name: 'Warrington',
    email: 'kwarrington4@webs.com'
  },
  {
    id: 6,
    first_name: 'Letitia',
    last_name: 'Lowensohn',
    email: 'llowensohn5@jigsy.com'
  },
  {
    id: 7,
    first_name: 'Spense',
    last_name: 'Ayscough',
    email: 'sayscough6@china.com.cn'
  },
  {
    id: 8,
    first_name: 'Merry',
    last_name: 'Trill',
    email: 'mtrill7@netlog.com'
  },
  {
    id: 9,
    first_name: 'Drona',
    last_name: 'Fominov',
    email: 'dfominov8@sina.com.cn'
  },
  {
    id: 10,
    first_name: 'Hermie',
    last_name: 'Daniaud',
    email: 'hdaniaud9@jalbum.net'
  },
  {
    id: 11,
    first_name: 'Jimmie',
    last_name: 'Rowet',
    email: 'jroweta@jugem.jp'
  },
  {
    id: 12,
    first_name: 'Janka',
    last_name: 'Gasnell',
    email: 'jgasnellb@stumbleupon.com'
  },
  {
    id: 13,
    first_name: 'Vilma',
    last_name: 'Winders',
    email: 'vwindersc@intel.com'
  },
  {
    id: 14,
    first_name: 'Carilyn',
    last_name: 'Chaters',
    email: 'cchatersd@biglobe.ne.jp'
  },
  {
    id: 15,
    first_name: 'Dorey',
    last_name: 'Ashlee',
    email: 'dashleee@purevolume.com'
  },
  {
    id: 16,
    first_name: 'Tanner',
    last_name: 'Simko',
    email: 'tsimkof@ning.com'
  },
  {
    id: 17,
    first_name: 'Neale',
    last_name: 'Gaffney',
    email: 'ngaffneyg@privacy.gov.au'
  },
  {
    id: 18,
    first_name: 'Darby',
    last_name: 'Matyatin',
    email: 'dmatyatinh@jimdo.com'
  },
  {
    id: 19,
    first_name: 'Opaline',
    last_name: 'Waring',
    email: 'owaringi@alexa.com'
  },
  {
    id: 20,
    first_name: 'Agathe',
    last_name: 'Shawcroft',
    email: 'ashawcroftj@digg.com'
  },
  {
    id: 21,
    first_name: 'Goldina',
    last_name: 'Ogers',
    email: 'gogersk@paypal.com'
  },
  {
    id: 22,
    first_name: 'Mirabella',
    last_name: 'Borton',
    email: 'mbortonl@sciencedaily.com'
  },
  {
    id: 23,
    first_name: 'Margaretta',
    last_name: 'Sharnock',
    email: 'msharnockm@columbia.edu'
  },
  {
    id: 24,
    first_name: 'Astrid',
    last_name: 'Turfrey',
    email: 'aturfreyn@hp.com'
  },
  {
    id: 25,
    first_name: 'Sandy',
    last_name: 'Davies',
    email: 'sdavieso@cargocollective.com'
  },
  {
    id: 26,
    first_name: 'Emmalyn',
    last_name: 'Leng',
    email: 'elengp@spiegel.de'
  },
  {
    id: 27,
    first_name: 'Napoleon',
    last_name: 'Josuweit',
    email: 'njosuweitq@goo.ne.jp'
  },
  {
    id: 28,
    first_name: 'Balduin',
    last_name: 'Dummigan',
    email: 'bdummiganr@usgs.gov'
  },
  {
    id: 29,
    first_name: 'Allayne',
    last_name: 'Roots',
    email: 'arootss@engadget.com'
  },
  {
    id: 30,
    first_name: 'Adelbert',
    last_name: 'Ruberry',
    email: 'aruberryt@epa.gov'
  },
  {
    id: 31,
    first_name: 'Granthem',
    last_name: 'Colthard',
    email: 'gcolthardu@is.gd'
  },
  {
    id: 32,
    first_name: 'Cointon',
    last_name: 'Battyll',
    email: 'cbattyllv@skyrock.com'
  },
  {
    id: 33,
    first_name: 'Colas',
    last_name: 'Tindle',
    email: 'ctindlew@cbsnews.com'
  },
  {
    id: 34,
    first_name: 'Ian',
    last_name: 'MacElroy',
    email: 'imacelroyx@t-online.de'
  },
  {
    id: 35,
    first_name: 'Willy',
    last_name: 'Shorton',
    email: 'wshortony@yelp.com'
  },
  {
    id: 36,
    first_name: 'Tobe',
    last_name: 'Volkes',
    email: 'tvolkesz@dailymotion.com'
  },
  {
    id: 37,
    first_name: 'Shepard',
    last_name: 'Lawling',
    email: 'slawling10@fotki.com'
  },
  {
    id: 38,
    first_name: 'Clarey',
    last_name: 'Balsillie',
    email: 'cbalsillie11@webmd.com'
  },
  {
    id: 39,
    first_name: 'Yorker',
    last_name: 'Tsarovic',
    email: 'ytsarovic12@360.cn'
  },
  {
    id: 40,
    first_name: 'Lucinda',
    last_name: 'Phibb',
    email: 'lphibb13@europa.eu'
  },
  {
    id: 41,
    first_name: 'Rebbecca',
    last_name: 'Coslitt',
    email: 'rcoslitt14@unesco.org'
  },
  {
    id: 42,
    first_name: 'Katinka',
    last_name: 'Bonaire',
    email: 'kbonaire15@dropbox.com'
  },
  {
    id: 43,
    first_name: 'Reinhold',
    last_name: 'Alabone',
    email: 'ralabone16@oracle.com'
  },
  {
    id: 44,
    first_name: 'Jeffry',
    last_name: 'Plose',
    email: 'jplose17@weibo.com'
  },
  {
    id: 45,
    first_name: 'Jamima',
    last_name: 'Nurse',
    email: 'jnurse18@seesaa.net'
  },
  {
    id: 46,
    first_name: 'Annamarie',
    last_name: 'Bullingham',
    email: 'abullingham19@google.cn'
  },
  {
    id: 47,
    first_name: 'Melonie',
    last_name: 'Scraggs',
    email: 'mscraggs1a@reverbnation.com'
  },
  {
    id: 48,
    first_name: 'Mariejeanne',
    last_name: 'Aubri',
    email: 'maubri1b@bloglovin.com'
  },
  {
    id: 49,
    first_name: 'Adriana',
    last_name: 'Offner',
    email: 'aoffner1c@blogspot.com'
  },
  {
    id: 50,
    first_name: 'Paloma',
    last_name: 'Cobleigh',
    email: 'pcobleigh1d@freewebs.com'
  },
  {
    id: 51,
    first_name: 'Dominic',
    last_name: 'Road',
    email: 'droad1e@rakuten.co.jp'
  },
  {
    id: 52,
    first_name: 'Dar',
    last_name: 'Mattusevich',
    email: 'dmattusevich1f@t.co'
  },
  {
    id: 53,
    first_name: 'Marieann',
    last_name: 'Matteini',
    email: 'mmatteini1g@goo.gl'
  },
  {
    id: 54,
    first_name: 'Betta',
    last_name: 'Destouche',
    email: 'bdestouche1h@archive.org'
  },
  {
    id: 55,
    first_name: 'Anitra',
    last_name: 'Laight',
    email: 'alaight1i@symantec.com'
  },
  {
    id: 56,
    first_name: 'Coralie',
    last_name: 'Buckner',
    email: 'cbuckner1j@sciencedaily.com'
  },
  {
    id: 57,
    first_name: 'Justinn',
    last_name: 'Raymen',
    email: 'jraymen1k@businesswire.com'
  },
  {
    id: 58,
    first_name: 'Lexi',
    last_name: 'Beavis',
    email: 'lbeavis1l@blogspot.com'
  },
  {
    id: 59,
    first_name: 'Ernesto',
    last_name: 'Fellgatt',
    email: 'efellgatt1m@google.com.hk'
  },
  {
    id: 60,
    first_name: 'Noelle',
    last_name: 'Wallenger',
    email: 'nwallenger1n@washington.edu'
  },
  {
    id: 61,
    first_name: 'Jerrold',
    last_name: 'Olekhov',
    email: 'jolekhov1o@furl.net'
  },
  {
    id: 62,
    first_name: 'Mar',
    last_name: 'Gueinn',
    email: 'mgueinn1p@dell.com'
  },
  {
    id: 63,
    first_name: 'Madeline',
    last_name: 'Fice',
    email: 'mfice1q@bandcamp.com'
  },
  {
    id: 64,
    first_name: 'Shaine',
    last_name: 'Abriani',
    email: 'sabriani1r@altervista.org'
  },
  {
    id: 65,
    first_name: 'Torrance',
    last_name: 'Goodhay',
    email: 'tgoodhay1s@icio.us'
  },
  {
    id: 66,
    first_name: 'Haleigh',
    last_name: 'Keech',
    email: 'hkeech1t@artisteer.com'
  },
  {
    id: 67,
    first_name: 'Henri',
    last_name: 'Castelletti',
    email: 'hcastelletti1u@forbes.com'
  },
  {
    id: 68,
    first_name: 'Giraud',
    last_name: 'Doncom',
    email: 'gdoncom1v@wix.com'
  },
  {
    id: 69,
    first_name: 'Calla',
    last_name: 'Shervil',
    email: 'cshervil1w@who.int'
  },
  {
    id: 70,
    first_name: 'Corly',
    last_name: 'Vedekhin',
    email: 'cvedekhin1x@sfgate.com'
  },
  { id: 71, first_name: 'Ramsay', last_name: 'Bail', email: 'rbail1y@hud.gov' },
  {
    id: 72,
    first_name: 'Skipton',
    last_name: 'Magnus',
    email: 'smagnus1z@imageshack.us'
  },
  {
    id: 73,
    first_name: 'Ange',
    last_name: 'Durnall',
    email: 'adurnall20@cornell.edu'
  },
  {
    id: 74,
    first_name: 'Christyna',
    last_name: 'Kettel',
    email: 'ckettel21@ifeng.com'
  },
  {
    id: 75,
    first_name: 'Deonne',
    last_name: 'Golsworthy',
    email: 'dgolsworthy22@uiuc.edu'
  },
  {
    id: 76,
    first_name: 'Ginny',
    last_name: 'Lapsley',
    email: 'glapsley23@jiathis.com'
  },
  {
    id: 77,
    first_name: 'Lorena',
    last_name: 'McMeeking',
    email: 'lmcmeeking24@jiathis.com'
  },
  {
    id: 78,
    first_name: 'Vannie',
    last_name: 'Wilden',
    email: 'vwilden25@cdc.gov'
  },
  {
    id: 79,
    first_name: 'Jana',
    last_name: 'Riepel',
    email: 'jriepel26@epa.gov'
  },
  {
    id: 80,
    first_name: 'Derick',
    last_name: 'Keynd',
    email: 'dkeynd27@jugem.jp'
  },
  {
    id: 81,
    first_name: 'Giffer',
    last_name: 'Fossick',
    email: 'gfossick28@upenn.edu'
  },
  {
    id: 82,
    first_name: 'Gerladina',
    last_name: 'Broggelli',
    email: 'gbroggelli29@infoseek.co.jp'
  },
  {
    id: 83,
    first_name: 'Grethel',
    last_name: 'Vecard',
    email: 'gvecard2a@msu.edu'
  },
  {
    id: 84,
    first_name: 'Stewart',
    last_name: 'Ourtic',
    email: 'sourtic2b@patch.com'
  },
  {
    id: 85,
    first_name: 'Glenda',
    last_name: 'Gaukroger',
    email: 'ggaukroger2c@columbia.edu'
  },
  {
    id: 86,
    first_name: 'Euell',
    last_name: 'Willden',
    email: 'ewillden2d@foxnews.com'
  },
  {
    id: 87,
    first_name: 'Artemis',
    last_name: 'Balfe',
    email: 'abalfe2e@time.com'
  },
  {
    id: 88,
    first_name: 'Candis',
    last_name: 'Oddboy',
    email: 'coddboy2f@home.pl'
  },
  {
    id: 89,
    first_name: 'Kerrie',
    last_name: 'Shearn',
    email: 'kshearn2g@joomla.org'
  },
  {
    id: 90,
    first_name: 'Tobias',
    last_name: 'Tigner',
    email: 'ttigner2h@china.com.cn'
  },
  {
    id: 91,
    first_name: 'Barnabe',
    last_name: 'Chmarny',
    email: 'bchmarny2i@blog.com'
  },
  {
    id: 92,
    first_name: 'Mellisa',
    last_name: 'Wanell',
    email: 'mwanell2j@rediff.com'
  },
  {
    id: 93,
    first_name: 'Linnell',
    last_name: 'Pedrielli',
    email: 'lpedrielli2k@histats.com'
  },
  {
    id: 94,
    first_name: 'Merrill',
    last_name: 'Orris',
    email: 'morris2l@rediff.com'
  },
  {
    id: 95,
    first_name: 'Theodore',
    last_name: "O'Devey",
    email: 'todevey2m@alibaba.com'
  },
  {
    id: 96,
    first_name: 'Harcourt',
    last_name: 'Rockingham',
    email: 'hrockingham2n@wikimedia.org'
  },
  {
    id: 97,
    first_name: 'Quincy',
    last_name: 'Haseley',
    email: 'qhaseley2o@cam.ac.uk'
  },
  {
    id: 98,
    first_name: 'Hynda',
    last_name: 'Dorking',
    email: 'hdorking2p@marriott.com'
  },
  {
    id: 99,
    first_name: 'Correy',
    last_name: 'Hallor',
    email: 'challor2q@1688.com'
  },
  { id: 100, first_name: 'Cliff', last_name: 'Aime', email: 'caime2r@yale.edu' }
]
function App() {
  const [userInput, setUserInput] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (userInput) {
      const searchResults = data.filter(user =>
        user.first_name.toLowerCase().includes(userInput.toLocaleLowerCase())
      )
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [userInput])

  return (
    <>
      <SearchInput userInput={userInput} setUserInput={setUserInput} />
      {!!!results.length && <Alert />}
      <SearchResults results={results} />
    </>
  )
}

export default App
