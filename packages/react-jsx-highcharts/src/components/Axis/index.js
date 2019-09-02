import Axis from './Axis';
import AxisTitle from './AxisTitle';
import provideAxis from '../AxisProvider';
const ChartAxis = Axis;
ChartAxis.Title = provideAxis(AxisTitle);
export default ChartAxis;
