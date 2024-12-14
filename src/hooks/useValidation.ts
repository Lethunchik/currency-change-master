import { useState, useEffect } from "react";



const useValidation = (
  val: string,
  validations: { [key: string]: boolean | number }
) => {

  const [isEmpty, setEmpty] = useState(false);
  const [isCurrency, setIsCurrency] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);



  useEffect(() => {

    for (let key in validations) {
      // eslint-disable-next-line default-case
      switch (key) {
        case "isCurrency":
          const re =
            /(?<=^| )\d+(\.\d+)?(?=$| )/;
          if (!re.test(String(val).toLowerCase())) {
            // console.log('false');
            
            setIsCurrency(true)
            
          } else {
            // console.log('true');
            setIsCurrency(false)
          }
      }
    }
  }, [val]);

  useEffect(() => {
    if (isCurrency) setIsInputValid(false);
    else setIsInputValid(true);
  }, [isCurrency]);

  return { isInputValid };
};

export default useValidation;
