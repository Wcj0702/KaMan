var m_ParseBaseDate = new Date(1970, 0, 1, 0, 0, 0);
var ParseContructors = {
		Date: function(value)
		{
			var val = new Date();
			val.setTime(value + m_ParseBaseDate.getTime());
			return val;
		},
		Exception: function(value)
		{
			return new Exception(value.Name, value.Message);
		}
};


function ParseJson(str, contructors)
	{
		try
		{
			var val = JSON.parse(
				str,
				function(key, value)
				{
					if (value != null && typeof value == "object" && value.__DataType != undefined)
					{
						if (ParseContructors[value.__DataType] != undefined)
						{
							return ParseContructors[value.__DataType](value.__Value);
						}
						else if (contructors != undefined && contructors[value.__DataType] != undefined)
						{
							return contructors[value.__DataType](value.__Value);
						}
						else
						{
							return value;
						}
					}
					else
					{
						return value;
					}
				}
			);
		}
		catch (ex)
		{
			throw ex;
		}
		return val;
	}