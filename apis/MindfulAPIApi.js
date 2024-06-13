import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import encodeQueryParam from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

const cleanHeaders = headers =>
  Object.fromEntries(Object.entries(headers).filter(kv => kv[1] != null));

export const fetchIdealGET = (Constants, { userid }, handlers = {}) =>
  fetch(
    `https://api.airtable.com/v0/app2HpyU9eVvq4XA8/tblULS6VlN9KpmRIv?filterByFormula=${encodeQueryParam(
      `UserID="${
        typeof userid === 'string' ? userid : JSON.stringify(userid ?? '')
      }"`
    )}`,
    {
      headers: cleanHeaders({
        Accept: 'application/json',
        Authorization: Constants['Airtable_Authorization'],
        'Content-Type': 'application/json',
      }),
    }
  ).then(res => handleResponse(res, handlers));

export const useFetchIdealGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['ideals', args],
    () => fetchIdealGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchFetchIdealGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  userid,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFetchIdealGET(
    { userid },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFetchIdeal: refetch });
};

export const fetchCatGET = (Constants, _args, handlers = {}) =>
  fetch(`https://api.airtable.com/v0/app2HpyU9eVvq4XA8/Category`, {
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    }),
  }).then(res => handleResponse(res, handlers));

export const useFetchCatGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['cats', args],
    () => fetchCatGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchFetchCatGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFetchCatGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFetchCat: refetch });
};

export const getFriendsGET = (Constants, _args, handlers = {}) =>
  fetch(`https://api.airtable.com/v0/app2HpyU9eVvq4XA8/User Info`, {
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    }),
  }).then(res => handleResponse(res, handlers));

export const useGetFriendsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Friends', args],
    () => getFriendsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetFriendsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetFriendsGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetFriends: refetch });
};

export const listIdealGET = (Constants, _args, handlers = {}) =>
  fetch(`https://api.airtable.com/v0/app2HpyU9eVvq4XA8/Ideal Type`, {
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    }),
  }).then(res => handleResponse(res, handlers));

export const useListIdealGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['toDos', args],
    () => listIdealGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchListIdealGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useListIdealGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchListIdeal: refetch });
};

export const saveIdealPOST = (
  Constants,
  {
    age,
    bad,
    body,
    character,
    date,
    face,
    fashion,
    good,
    img,
    mbti,
    uage,
    userid,
    userpw,
    values,
  },
  handlers = {}
) =>
  fetch(`https://api.airtable.com/v0/app2HpyU9eVvq4XA8/User Info`, {
    body: JSON.stringify({
      records: [
        {
          fields: {
            UserID: userid,
            UserPW: userpw,
            Url: img,
            Age: uage,
            A1_Age: age,
            A2_Body: body,
            A3_Face: face,
            A4_Character: character,
            A5_Fashion: fashion,
            A6_MBTI: mbti,
            A7_Date: date,
            A8_Good: good,
            A9_Bad: bad,
            A10_Values: values,
          },
        },
      ],
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    }),
    method: 'POST',
  }).then(res => handleResponse(res, handlers));

export const useSaveIdealPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => saveIdealPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('ideal', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('ideal');
        queryClient.invalidateQueries('ideals');
      },
    }
  );
};

export const FetchSaveIdealPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  age,
  bad,
  body,
  character,
  date,
  face,
  fashion,
  good,
  img,
  mbti,
  uage,
  userid,
  userpw,
  values,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSaveIdealPOST(
    {
      age,
      bad,
      body,
      character,
      date,
      face,
      fashion,
      good,
      img,
      mbti,
      uage,
      userid,
      userpw,
      values,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSaveIdeal: refetch });
};

export const updateIdealPATCH = (
  Constants,
  {
    age,
    bad,
    body,
    character,
    date,
    face,
    fashion,
    good,
    id,
    mbti,
    userid,
    userpw,
    values,
  },
  handlers = {}
) =>
  fetch(`https://api.airtable.com/v0/app2HpyU9eVvq4XA8/User Info`, {
    body: JSON.stringify({
      records: [
        {
          id: id,
          fields: {
            UserID: userid,
            UserPW: userpw,
            A1_Age: age,
            A2_Body: body,
            A3_Face: face,
            A4_Character: character,
            A5_Fashion: fashion,
            A6_MBTI: mbti,
            A7_Date: date,
            A8_Good: good,
            A9_Bad: bad,
            A10_Values: values,
          },
        },
      ],
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      Authorization: Constants['Airtable_Authorization'],
      'Content-Type': 'application/json',
    }),
    method: 'PATCH',
  }).then(res => handleResponse(res, handlers));

export const useUpdateIdealPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => updateIdealPATCH(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('ideal', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('ideal');
        queryClient.invalidateQueries('ideals');
      },
    }
  );
};
